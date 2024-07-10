import { motion } from 'framer-motion';

import TextType from '../components/ui/typo/text-type';
import InfiniteSlider from '../components/ui/slider/infinite-slider';
import Timeline from '../components/ui/timeline/timeline';
import ktRemoveBgImg from '../assets/ktLogo-removebg-preview.png';
import ktHomeBgImg2 from '../assets/ktHomeBgImg2.png';

const HomePage = () => {
  return (
    <article
      style={{ backgroundImage: `url(${ktHomeBgImg2})` }}
      className="flex h-auto w-full flex-col gap-8 bg-center py-6"
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
      <TextType
        textArr={[
          'WE ARE GREAT MAGIC\n WINNING KT!',
          '마법같은 기적을 만들자\n 케이티 위즈와 함께 하자!',
          '패기와 열정을 모아서\n V2를 향하여 정진하라!',
        ]}
      />

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

      <div className="mx-4">
        <h1 className="text-2xl font-extrabold text-white">우리 구단의 역사</h1>
        <div className="mb-4 w-1/6 border-t-4 border-white"></div>
      </div>
      <Timeline />
    </article>
  );
};

export default HomePage;
