'use client'
import { motion } from 'framer-motion';

const WobblyImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <motion.div
      className="relative w-[75%] h-[75vh] max-h-[75vh] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {/* Soft ground shadow — presence, not a frame */}
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-6 rounded-[100%] bg-black/20 blur-xl pointer-events-none"
        aria-hidden
      />

      <motion.div
        className="relative w-full h-full overflow-hidden"
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse 92% 88% at 50% 45%, #000 55%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 92% 88% at 50% 45%, #000 55%, transparent 100%)',
        }}
        whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
      >
        <motion.img
          src={imageUrl}
          alt="Kaleb Asratemedhin"
          className="w-full h-full object-cover object-top"
          initial={{ scale: 1.08, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
        />
      </motion.div>
    </motion.div>
  );
};

export default WobblyImage;
