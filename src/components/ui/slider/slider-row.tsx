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
