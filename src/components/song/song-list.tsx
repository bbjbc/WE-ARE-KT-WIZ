import SongItem from './song-item';

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
  return (
    <article className="my-6">
      <h1 className="mb-2 flex justify-center text-sm">
        kt wiz의 선수 응원가 리스트입니다.
      </h1>

      {songs.map((song) => (
        <div key={song.id}>
          <ul className="flex flex-col">
            {song.song.map((songUrl, index) => (
              <li key={index} className="my-2">
                <SongItem
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
