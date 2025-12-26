'use client'
const WobblyImage = ({ imageUrl }: {imageUrl: string}) => {
    return (
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
        <div className="relative w-full h-full bg-bgSecondary border border-border overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%]">
          <img
            src={imageUrl}
            alt="Kaleb Asratemedhin"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  };
  
  export default WobblyImage;
