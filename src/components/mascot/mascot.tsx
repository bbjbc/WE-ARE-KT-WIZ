import { motion, AnimatePresence } from 'framer-motion';

import ktMascot from '../../assets/ktMascot.png';

const Mascot = () => {
  return (
    <>
      <article className="mb-8">
        <h1 className="text-lg font-extrabold text-red-700">마스코트 소개</h1>
        <div className="w-1/6 border-t-4 border-red-500"></div>
      </article>
      <AnimatePresence>
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

          <p className="font-gonggothic mt-10 text-center">
            저희는 kt wiz의 마스코트
            <br />
            <span className="text-xl text-red-700">'빅(Vic)'</span>과{' '}
            <span className="text-xl text-red-700">'또리(Ddory)'</span>에요!
            <br />
            kt wiz의 마법 같은 여정을 위해 응원해주세요!
          </p>
        </>
      </AnimatePresence>
    </>
  );
};

export default Mascot;
