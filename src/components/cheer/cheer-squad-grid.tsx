import { useAtomValue } from 'jotai';

import CheerSquadItem from './cheer-squad-item';
import { CheerSquadInfo } from '../../mocks/cheer-squad-info';
import { searchTermAtom } from '../../utils/atoms';

const CheerSquadGrid = () => {
  const searchTerm = useAtomValue(searchTermAtom);

  const filteredCheerSquad = CheerSquadInfo.filter((cheerSquad) =>
    cheerSquad.name.includes(searchTerm),
  );
  const countCheerSquad = filteredCheerSquad.length;
  const searchResultMessage =
    countCheerSquad === 0
      ? '검색 결과가 없습니다.'
      : `당신이 검색한 응원단은 총 ${countCheerSquad}명입니다.`;

  return (
    <>
      <h2 className="mb-2 flex justify-center text-sm">
        {searchTerm
          ? searchResultMessage
          : `kt wiz는 총 ${countCheerSquad}명의 응원단과 함께합니다!`}
      </h2>
      <ul className="mb-10 flex flex-col gap-6">
        {filteredCheerSquad.map((cheerSquad) => (
          <li key={cheerSquad.id}>
            <CheerSquadItem key={cheerSquad.id} cheerSquad={cheerSquad} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CheerSquadGrid;
