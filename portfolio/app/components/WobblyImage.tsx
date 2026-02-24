'use client'
import { motion } from 'framer-motion';

const WobblyImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <motion.div
      className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="relative w-full h-full bg-bgSecondary border border-border overflow-hidden rounded-2xl md:rounded-3xl shadow-xl shadow-black/10"
        initial={{ borderRadius: '1.5rem' }}
        whileHover={{
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px var(--border)',
          transition: { duration: 0.3 },
        }}
      >
        <motion.img
          src={imageUrl}
          alt="Kaleb Asratemedhin"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
        />
      </motion.div>
    </motion.div>
  );
};

export default WobblyImage;
