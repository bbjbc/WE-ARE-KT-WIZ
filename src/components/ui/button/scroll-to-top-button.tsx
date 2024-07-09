import { useState, useEffect } from 'react';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { IoIosBaseball } from 'react-icons/io';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.scrollable-section');
      if (section && section.scrollTop > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    const section = document.querySelector('.scrollable-section');
    section?.addEventListener('scroll', handleScroll);
    return () => {
      section?.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  useEffect(() => {
    if (showButton) {
      controls.start({
        rotate: [0, 360],
        transition: {
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    }
  }, [showButton, controls]);

  const scrollToTop = () => {
    const section = document.querySelector('.scrollable-section');
    section?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 text-yellow-400 transition-colors duration-300 hover:text-red-700"
        >
          <motion.div animate={controls}>
            <IoIosBaseball size={40} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
