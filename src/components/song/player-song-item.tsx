import AccordionItem from '../ui/accordion/accordion-item';
import AudioPlayer from '../ui/audio/audio-player';
import { FaItunesNote } from 'react-icons/fa6';

interface PlayerSongItemProps {
  playerName: string;
  songUrl: string;
  index: number | string;
  lyrics: string;
  image: string;
}

const PlayerSongItem: React.FC<PlayerSongItemProps> = ({
  playerName,
  songUrl,
  index,
  lyrics,
  image,
}) => {
  const formattedLyrics = lyrics.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  const header = (
    <article className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={image}
          alt={playerName}
          className="mr-3 h-10 w-10 rounded-full"
        />
        <h1 className="font-semibold">
          {playerName} 응원가 {index}
        </h1>
      </div>
      <FaItunesNote size={20} />
    </article>
  );

  const details = (
    <div className="flex flex-col justify-center text-left">
      <span>{playerName} 응원가 가사</span>
      <p className="my-2 text-xs">{formattedLyrics}</p>
      <AudioPlayer src={songUrl} />
    </div>
  );

  return <AccordionItem header={header} details={details} />;
};

export default PlayerSongItem;
