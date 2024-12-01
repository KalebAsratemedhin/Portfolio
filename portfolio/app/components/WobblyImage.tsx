const WobblyImage = ({ imageUrl }: {imageUrl: string}) => {
    return (
      <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto animate-fade-in">
        {/* <div className="absolute inset-0 bg-secondary/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob"></div> */}
        {/* <div className="absolute inset-0 bg-secondary/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob animation-delay-2000"></div> */}
        {/* <div className="absolute inset-0 bg-secondary/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob animation-delay-4000"></div> */}
        <div className="relative w-full h-full bg-white overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%]">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  };
  
  export default WobblyImage;
  