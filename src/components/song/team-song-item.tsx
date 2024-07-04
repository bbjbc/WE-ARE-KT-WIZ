import AccordionItem from '../ui/accordion/accordion-item';
import AudioPlayer from '../ui/audio/audio-player';
import { BsMusicNoteList } from 'react-icons/bs';

interface TeamSongItemProps {
  songName: string;
  songUrl: string;
  lyrics: string;
}

const TeamSongItem: React.FC<TeamSongItemProps> = ({
  songName,
  songUrl,
  lyrics,
}) => {
  const formattedLyrics = lyrics.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  const header = (
    <article className="flex items-center justify-between">
      <h1 className="font-semibold">{songName}</h1>
      <BsMusicNoteList size={20} />
    </article>
  );

  const details = (
    <div className="flex flex-col justify-center text-left">
      <span>{songName} 가사</span>
      <p className="my-2 text-xs">{formattedLyrics}</p>
      <AudioPlayer src={songUrl} />
    </div>
  );

  return <AccordionItem header={header} details={details} />;
};

export default TeamSongItem;
