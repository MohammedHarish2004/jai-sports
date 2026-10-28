import { motion, AnimatePresence } from 'framer-motion';
import iconImg from '../../assets/ICON.png';

export default function Preloader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="app-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center select-none"
          aria-live="polite"
          aria-label="Loading Jai Sports..."
        >
          {/* Centered Rotating Brand Icon */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Soft Ambient Glow */}
            <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#FFF0ED] blur-2xl -z-10" />

            {/* Rotating ICON.png */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'linear',
              }}
              className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center"
            >
              <img
                src={iconImg}
                alt="Jai Sports Icon"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>

            {/* Brand Name & Tagline */}
            <div className="mt-6 text-center">
              <h2 className="text-base sm:text-lg font-black font-outfit tracking-[0.25em] text-[#101B4B] uppercase">
                JAI SPORTS
              </h2>
              <p className="text-[11px] sm:text-xs font-bold text-[#F04423] tracking-widest uppercase mt-1">
                Passion Starts Here
              </p>
            </div>

            {/* Smooth Animated Loading Bar */}
            <div className="w-36 sm:w-44 h-1 bg-slate-100 rounded-full mt-5 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: 'easeInOut',
                }}
                className="w-1/2 h-full bg-gradient-to-r from-[#F04423] to-[#FFA08A] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

