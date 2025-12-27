import MarvelTitle from '@/components/MarvelTitle';
import CryptoTable from '@/components/CryptoTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-destructive/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-accent/10 blur-[100px] rounded-full" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <MarvelTitle />
        
        <div className="mt-8">
          <CryptoTable />
        </div>
        
        {/* Footer info */}
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>Данные обновляются в реальном времени • Перетащите столбцы для изменения порядка</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
