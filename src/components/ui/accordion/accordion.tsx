import { motion } from 'framer-motion';

interface AccordionProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ isOpen, children }) => {
  return (
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0 }}
      transition={{ duration: 0.3 }}
      className="w-full overflow-hidden"
    >
      <div className="mt-4">{children}</div>
    </motion.div>
  );
};

export default Accordion;
