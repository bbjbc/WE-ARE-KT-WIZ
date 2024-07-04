import { useAtomValue } from 'jotai';
import { chosungIncludes } from 'es-hangul';

import { searchTermAtom } from '../../utils/atoms';
import PlayerSongItem from './player-song-item';

interface Song {
  id: string;
  name: string;
  lyrics: string[];
  song: string[];
  image: string;
}

interface SongListProps {
  songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  const searchTerm = useAtomValue(searchTermAtom);

  const filteredSongs = songs.filter(
    (song) =>
      song.name.includes(searchTerm) || chosungIncludes(song.name, searchTerm),
  );

  return (
    <article className="mb-6 mt-2">
      <h1 className="mb-2 flex justify-center text-sm">
        kt wiz의 선수 응원가 리스트입니다.
      </h1>

      {filteredSongs.map((song) => (
        <div key={song.id}>
          <ul className="flex flex-col">
            {song.song.map((songUrl, index) => (
              <li key={index} className="my-2">
                <PlayerSongItem
                  key={`${song.id}-${index}`}
                  playerName={song.name}
                  songUrl={songUrl}
                  index={song.song.length === 1 ? '' : index + 1}
                  lyrics={song.lyrics[index] ?? ''}
                  image={song.image}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  );
};

export default SongList;
