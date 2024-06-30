import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.4,
    },
  }),
};

interface ReservationItemProps {
  icon: JSX.Element;
  title: string;
  description: string | JSX.Element;
  custom: number;
}

const ReservationItem: React.FC<ReservationItemProps> = ({
  icon,
  title,
  description,
  custom,
}) => {
  return (
    <motion.div
      className="flex flex-col items-start justify-between rounded-md bg-white p-4 shadow-md"
      initial="hidden"
      animate="visible"
      custom={custom}
      variants={variants}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <div>
          <p className="font-md text-gray-800">{title}</p>
          <div className="text-sm text-gray-500">{description}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReservationItem;
