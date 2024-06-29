import { josa } from 'es-hangul';

import PlayerItem from './player-item';
import { PlayerInfo } from '../../mocks/player-info';

interface PlayerGridProps {
  category: string;
}

const PlayerGrid: React.FC<PlayerGridProps> = ({ category }) => {
  const filteredPlayers = PlayerInfo.filter(
    (player) => player.category === category,
  );

  const countCategoryPlayer = filteredPlayers.length;

  const josaCategory = josa(category, '와/과');

  return (
    <>
      <h2 className="mb-2 flex justify-center text-sm font-medium">
        kt wiz는 총 {countCategoryPlayer}명의 {josaCategory} 함께합니다!
      </h2>
      <ul className="mb-10 flex flex-col gap-6">
        {filteredPlayers.map((player) => (
          <li key={player.id}>
            <PlayerItem key={player.id} player={player} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlayerGrid;
