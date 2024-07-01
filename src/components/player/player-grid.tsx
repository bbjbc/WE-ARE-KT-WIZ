import { useAtomValue } from 'jotai';
import { josa, chosungIncludes } from 'es-hangul';

import PlayerItem from './player-item';
import { PlayerInfo } from '../../mocks/player-info';
import { searchTermAtom } from '../../utils/atoms';

interface PlayerGridProps {
  category: string;
  category_detail?: string;
}

const PlayerGrid: React.FC<PlayerGridProps> = ({
  category,
  category_detail,
}) => {
  const searchTerm = useAtomValue(searchTermAtom);

  const filteredPlayers = PlayerInfo.filter(
    (player) =>
      player.category === category &&
      (!category_detail || player.category_detail === category_detail) &&
      (player.name.includes(searchTerm) ||
        chosungIncludes(player.name, searchTerm)),
  );

  const countCategoryPlayer = filteredPlayers.length;
  const josaCategory = category_detail
    ? josa(category_detail, '와/과')
    : josa(category, '와/과');

  const searchResultMessage =
    countCategoryPlayer === 0
      ? '검색 결과가 없습니다.'
      : `당신이 검색한 선수는 총 ${countCategoryPlayer}명입니다.`;

  return (
    <>
      <h2 className="mb-2 flex justify-center text-sm">
        {searchTerm
          ? searchResultMessage
          : `kt wiz는 총 ${countCategoryPlayer}명의 ${josaCategory} 함께합니다!`}
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
