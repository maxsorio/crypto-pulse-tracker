import { useState, useEffect, useCallback } from 'react';
import { ChevronUp, ChevronDown, GripVertical } from 'lucide-react';
import { CryptoData, initialCryptoData, exchangeNames, exchangeDisplayNames, ExchangeName } from '@/data/cryptoData';
import { cn } from '@/lib/utils';

type SortDirection = 'asc' | 'desc' | null;
type SortColumn = 'id' | 'name' | 'spread' | ExchangeName | null;

interface ColumnConfig {
  id: string;
  label: string;
  key: SortColumn;
  width: string;
}

const CryptoTable = () => {
  const [data, setData] = useState<CryptoData[]>(initialCryptoData);
  const [sortColumn, setSortColumn] = useState<SortColumn>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [columns, setColumns] = useState<ColumnConfig[]>([
    { id: 'num', label: '#', key: 'id', width: 'w-16' },
    { id: 'name', label: 'Криптовалюта', key: 'name', width: 'w-40' },
    { id: 'spread', label: 'Спред %', key: 'spread', width: 'w-24' },
    ...exchangeNames.map(ex => ({
      id: ex,
      label: exchangeDisplayNames[ex],
      key: ex as SortColumn,
      width: 'w-28',
    })),
  ]);
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => 
        prevData.map(crypto => ({
          ...crypto,
          bybit: crypto.bybit * (1 + (Math.random() - 0.5) * 0.001),
          okx: crypto.okx * (1 + (Math.random() - 0.5) * 0.001),
          mexc: crypto.mexc * (1 + (Math.random() - 0.5) * 0.001),
          binance: crypto.binance * (1 + (Math.random() - 0.5) * 0.001),
          bitget: crypto.bitget * (1 + (Math.random() - 0.5) * 0.001),
          bingx: crypto.bingx * (1 + (Math.random() - 0.5) * 0.001),
          gateio: crypto.gateio * (1 + (Math.random() - 0.5) * 0.001),
          kucoin: crypto.kucoin * (1 + (Math.random() - 0.5) * 0.001),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const calculateSpread = useCallback((crypto: CryptoData): number => {
    const prices = [
      crypto.bybit, crypto.okx, crypto.mexc, crypto.binance,
      crypto.bitget, crypto.bingx, crypto.gateio, crypto.kucoin
    ];
    const max = Math.max(...prices);
    const min = Math.min(...prices);
    return ((max - min) / min) * 100;
  }, []);

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortColumn(null);
        setSortDirection(null);
      }
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getSortedData = useCallback(() => {
    if (!sortColumn || !sortDirection) return data;

    return [...data].sort((a, b) => {
      let aVal: number | string;
      let bVal: number | string;

      if (sortColumn === 'spread') {
        aVal = calculateSpread(a);
        bVal = calculateSpread(b);
      } else if (sortColumn === 'name') {
        aVal = a.name;
        bVal = b.name;
      } else if (sortColumn === 'id') {
        aVal = a.id;
        bVal = b.id;
      } else {
        aVal = a[sortColumn as ExchangeName];
        bVal = b[sortColumn as ExchangeName];
      }

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortDirection === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      return sortDirection === 'asc' 
        ? (aVal as number) - (bVal as number)
        : (bVal as number) - (aVal as number);
    });
  }, [data, sortColumn, sortDirection, calculateSpread]);

  const handleDragStart = (columnId: string) => {
    setDraggedColumn(columnId);
  };

  const handleDragOver = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    if (draggedColumn && draggedColumn !== columnId) {
      setHoveredColumn(columnId);
    }
  };

  const handleDrop = (targetColumnId: string) => {
    if (!draggedColumn || draggedColumn === targetColumnId) return;

    setColumns(prevColumns => {
      const draggedIndex = prevColumns.findIndex(c => c.id === draggedColumn);
      const targetIndex = prevColumns.findIndex(c => c.id === targetColumnId);
      
      const newColumns = [...prevColumns];
      const [removed] = newColumns.splice(draggedIndex, 1);
      newColumns.splice(targetIndex, 0, removed);
      
      return newColumns;
    });

    setDraggedColumn(null);
    setHoveredColumn(null);
  };

  const formatPrice = (price: number): string => {
    if (price >= 1000) {
      return price.toFixed(2);
    } else if (price >= 1) {
      return price.toFixed(4);
    } else {
      return price.toFixed(6);
    }
  };

  const sortedData = getSortedData();

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border bg-card shadow-lg">
      <table className="w-full min-w-max">
        <thead>
          <tr className="bg-secondary/50">
            {columns.map((column) => (
              <th
                key={column.id}
                draggable
                onDragStart={() => handleDragStart(column.id)}
                onDragOver={(e) => handleDragOver(e, column.id)}
                onDrop={() => handleDrop(column.id)}
                onDragEnd={() => { setDraggedColumn(null); setHoveredColumn(null); }}
                className={cn(
                  "group relative px-4 py-3 text-left text-sm font-semibold text-foreground transition-all cursor-move select-none",
                  column.width,
                  hoveredColumn === column.id && "bg-primary/20",
                  draggedColumn === column.id && "opacity-50"
                )}
              >
                <div className="flex items-center gap-2">
                  {/* Drag handle */}
                  <div className="draggable-indicator">
                    <GripVertical className="h-4 w-4 text-muted-foreground" />
                  </div>
                  
                  <span className="truncate">{column.label}</span>
                  
                  {/* Sort button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSort(column.key);
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                  >
                    <div className="flex flex-col -space-y-1">
                      <ChevronUp 
                        className={cn(
                          "h-3 w-3 transition-colors",
                          sortColumn === column.key && sortDirection === 'asc' 
                            ? "text-primary" 
                            : "text-muted-foreground hover:text-foreground"
                        )} 
                      />
                      <ChevronDown 
                        className={cn(
                          "h-3 w-3 transition-colors",
                          sortColumn === column.key && sortDirection === 'desc' 
                            ? "text-primary" 
                            : "text-muted-foreground hover:text-foreground"
                        )} 
                      />
                    </div>
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {sortedData.map((crypto, index) => (
            <tr 
              key={crypto.id}
              className="table-row-hover animate-slide-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {columns.map((column) => (
                <td key={column.id} className={cn("px-4 py-3 text-sm", column.width)}>
                  {column.id === 'num' && (
                    <span className="text-muted-foreground font-medium">{crypto.id}</span>
                  )}
                  {column.id === 'name' && (
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground">{crypto.symbol}</span>
                      <span className="text-xs text-muted-foreground">{crypto.name}/{crypto.pair}</span>
                    </div>
                  )}
                  {column.id === 'spread' && (
                    <span className={cn(
                      "font-mono font-semibold",
                      calculateSpread(crypto) > 0.05 ? "text-success" : "text-muted-foreground"
                    )}>
                      {calculateSpread(crypto).toFixed(4)}%
                    </span>
                  )}
                  {exchangeNames.includes(column.id as ExchangeName) && (
                    <span className="font-mono text-foreground">
                      ${formatPrice(crypto[column.id as ExchangeName])}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
