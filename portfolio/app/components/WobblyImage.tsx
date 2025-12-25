const WobblyImage = ({ imageUrl }: {imageUrl: string}) => {
    return (
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
        {/* Animated blob backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob" style={{ animationDelay: '4s' }}></div>
        
        {/* Main image container */}
        <div className="relative w-full h-full bg-glass border border-secondary/20 overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] 
                        shadow-2xl shadow-secondary/20 hover:shadow-secondary/30 transition-all duration-500 group">
          <img
            src={imageUrl}
            alt="Kaleb Asratemedhin"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    );
  };
  
  export default WobblyImage;
  