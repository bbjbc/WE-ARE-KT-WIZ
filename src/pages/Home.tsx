import { motion } from 'framer-motion';

import ktRemoveBgImg from '../assets/ktLogo-removebg-preview.png';
import ktHomeBgImg from '../assets/ktHomeBgImg.png';
import TextType from '../components/ui/typo/text-type';
import InfiniteSlider from '../components/ui/slider/infinite-slider';

const HomePage = () => {
  return (
    <article
      style={{ backgroundImage: `url(${ktHomeBgImg})` }}
      className="flex h-screen flex-col gap-8 bg-cover bg-center py-6"
    >
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 400 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.9 }}
        src={ktRemoveBgImg}
        alt="ktLogo"
        className="mb-2 w-full"
      />
      <TextType text={'WE ARE GREAT MAGIC\n WINNING KT!'} />

      <InfiniteSlider
        topItems={[
          'KBO 신생팀 중 최단 기간 우승',
          '우리가 만드는 승리의 순간',
          '수원 kt 위즈 파크',
          '함께 가는 kt wiz, 언제나 승리!',
          '날려버려',
        ]}
        bottomItems={[
          'SUWON',
          'WIZARD',
          'MIRACLE',
          'WINNING KT!',
          'HISTORY',
          'FOREVER',
          'TOGETHER',
        ]}
      />
    </article>
  );
};

export default HomePage;
