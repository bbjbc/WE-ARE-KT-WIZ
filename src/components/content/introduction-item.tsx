import { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface IntroductionItemProps {
  title: string;
  imgSrc?: string;
  children: React.ReactNode;
}

const IntroductionItem: React.FC<IntroductionItemProps> = ({
  title,
  imgSrc,
  children,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 1.5 }}
      className="space-y-2"
    >
      <h1 className="text-lg font-extrabold text-red-700">{title}</h1>
      <div className="w-1/6 border-t-4 border-red-500"></div>
      <p>{children}</p>
      {imgSrc && (
        <img src={imgSrc} alt="kt wiz" className="w-full rounded-xl" />
      )}
    </motion.article>
  );
};

export default IntroductionItem;
