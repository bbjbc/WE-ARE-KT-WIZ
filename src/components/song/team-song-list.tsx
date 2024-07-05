import { useAtomValue } from 'jotai';
import { chosungIncludes } from 'es-hangul';

import { searchTermAtom } from '../../utils/atoms';
import TeamSongItem from './team-song-item';

interface TeamSong {
  id: string;
  name: string;
  lyrics: string;
  songUrl: string;
}

interface TeamSongListProps {
  teamSongs: TeamSong[];
}

const TeamSongList: React.FC<TeamSongListProps> = ({ teamSongs }) => {
  const searchTerm = useAtomValue(searchTermAtom);

  const filteredTeamSongs = teamSongs.filter(
    (teamSong) =>
      teamSong.name.includes(searchTerm) ||
      chosungIncludes(teamSong.name, searchTerm),
  );

  return (
    <article className="mb-6 mt-2">
      <h1 className="mb-2 flex justify-center text-sm">
        kt wiz의 팀 응원가 리스트입니다.
      </h1>

      {filteredTeamSongs.map((teamSong) => (
        <div key={teamSong.id}>
          <ul className="flex flex-col">
            <li key={teamSong.id} className="my-2">
              <TeamSongItem
                songName={teamSong.name}
                songUrl={teamSong.songUrl}
                lyrics={teamSong.lyrics}
              />
            </li>
          </ul>
        </div>
      ))}
    </article>
  );
};

export default TeamSongList;
