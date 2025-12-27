const MarvelTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative">
        {/* Glow effect behind */}
        <div className="absolute inset-0 blur-3xl bg-destructive/30 rounded-full scale-150" />
        
        {/* Main title */}
        <h1 className="relative font-marvel text-6xl md:text-8xl lg:text-9xl tracking-wider uppercase">
          <span className="relative inline-block px-6 py-2 bg-destructive text-foreground shadow-marvel transform skew-x-[-3deg]">
            <span className="inline-block transform skew-x-[3deg]">
              Cripto MaSer
            </span>
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-center mt-4 text-muted-foreground text-sm md:text-base tracking-widest uppercase">
          Real-Time Exchange Tracker
        </p>
      </div>
    </div>
  );
};

export default MarvelTitle;
