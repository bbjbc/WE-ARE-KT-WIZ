import { useState } from 'react';

import Accordion from './accordion';

interface AccordionItemProps {
  header: JSX.Element;
  details: JSX.Element;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ header, details }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className="flex cursor-pointer flex-col rounded-lg bg-slate-50 p-3 shadow-md transition-all duration-300 hover:bg-gray-200"
      onClick={toggleAccordion}
    >
      {header}

      <Accordion isOpen={isOpen}>
        <div className="mt-4 rounded-lg border-2 border-zinc-300 bg-white p-4">
          {details}
        </div>
      </Accordion>
    </section>
  );
};

export default AccordionItem;
