import AccordionItem from '../ui/accordion/accordion-item';

import { FaItunesNote } from 'react-icons/fa6';

interface SongItemProps {
  playerName: string;
  songUrl: string;
  index: number | string;
}

const SongItem: React.FC<SongItemProps> = ({ playerName, songUrl, index }) => {
  const header = (
    <article className="flex items-center justify-between">
      <h1 className="font-semibold">
        {playerName} 응원가 {index}
      </h1>
      <FaItunesNote size={20} />
    </article>
  );

  const details = (
    <div className="flex items-center justify-center">
      <audio controls>
        <source src={songUrl} type="audio/mp3" />
      </audio>
    </div>
  );

  return <AccordionItem header={header} details={details} />;
};

export default SongItem;
