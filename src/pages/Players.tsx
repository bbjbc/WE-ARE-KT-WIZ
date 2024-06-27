import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import PlayerLayout from '../router/PlayerLayout';
import ktMascot from '../assets/ktMascot.png';
import ktMascotContent from '../assets/ktMascotContent.png';

const PlayersPage = () => {
  const location = useLocation();

  return (
    <>
      <PlayerLayout>
        <Outlet />
        <AnimatePresence>
          {location.pathname === '/players' && (
            <>
              <motion.img
                key="kt-mascot"
                src={ktMascot}
                alt="kt 마스코트"
                className="w-full"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 120 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <img
                src={ktMascotContent}
                alt="kt 마스코트 설명"
                className="mt-10 w-full"
              />
            </>
          )}
        </AnimatePresence>
      </PlayerLayout>
    </>
  );
};

export default PlayersPage;
