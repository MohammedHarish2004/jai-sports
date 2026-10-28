import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

export default function FloatingHelp() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const whatsappUrl = createGeneralEnquiryUrl();
  const phoneToCall = siteConfig.displayPhone;
  const cleanPhone = phoneToCall.replace(/[^0-9]/g, '');

  return (
    <div
      ref={menuRef}
      className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-3 select-none pointer-events-auto"
    >
      {/* Animated Minimal Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-1">
            {/* 1. WhatsApp Action */}
            <motion.a
              key="whatsapp-action"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-2.5 bg-white pl-4 pr-2 py-2 rounded-full shadow-xl border border-slate-200/90 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span className="text-xs sm:text-sm font-bold text-[#101B4B] group-hover:text-emerald-600 transition-colors">
                WhatsApp
              </span>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </motion.a>

            {/* 2. Call Action */}
            <motion.a
              key="call-action"
              href={`tel:${cleanPhone}`}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="group flex items-center gap-2.5 bg-white pl-4 pr-2 py-2 rounded-full shadow-xl border border-slate-200/90 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span className="text-xs sm:text-sm font-bold text-[#101B4B] group-hover:text-[#F04423] transition-colors">
                Call {phoneToCall}
              </span>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F04423] text-white flex items-center justify-center shadow-md">
                <Phone className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </div>
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options: Call or WhatsApp'}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className={`flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full shadow-2xl transition-all duration-300 cursor-pointer ${
          isOpen
            ? 'bg-[#101B4B] text-white shadow-[#101B4B]/40'
            : 'bg-gradient-to-tr from-[#F04423] to-[#FF6B4A] text-white shadow-[#F04423]/40'
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
