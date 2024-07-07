import { motion } from 'framer-motion';

interface SliderRowProps {
  items: string[];
  direction: 'left' | 'right';
}

const SliderRow: React.FC<SliderRowProps> = ({ items, direction }) => {
  const slideDirection =
    direction === 'left' ? ['-500%', '0%'] : ['0%', '-700%'];

  return (
    <article className="relative overflow-hidden whitespace-nowrap py-3">
      {/* 왼쪽 부분 그라데이션 */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-10 bg-gradient-to-r from-sky-600 to-transparent" />

      {/* 오른쪽 부분 그라데이션 */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-10 bg-gradient-to-l from-red-600 to-transparent" />

      <motion.div
        className="flex"
        initial={{ x: direction === 'left' ? '0%' : '-100%' }}
        animate={{ x: slideDirection }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-block px-3 text-3xl font-extrabold"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </article>
  );
};

export default SliderRow;
