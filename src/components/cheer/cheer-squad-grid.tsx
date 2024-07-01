import CheerSquadItem from './cheer-squad-item';
import { CheerSquadInfo } from '../../mocks/cheer-squad-info';

const CheerSquadGrid = () => {
  const countCheerSquad = CheerSquadInfo.length;

  return (
    <>
      <h2 className="my-4 flex justify-center text-sm">
        kt wiz는 총 {countCheerSquad}명의 응원단과 함께합니다!
      </h2>
      <ul className="mb-10 flex flex-col gap-6">
        {CheerSquadInfo.map((cheerSquad) => (
          <li key={cheerSquad.id}>
            <CheerSquadItem key={cheerSquad.id} cheerSquad={cheerSquad} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CheerSquadGrid;
