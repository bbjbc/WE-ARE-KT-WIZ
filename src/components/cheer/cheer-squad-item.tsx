import { useState } from 'react';

import Accordion from '../ui/accordion/accordion';
import PlayerDetailInfo from '../player/player-detail-info';

interface CheerSquad {
  id: string;
  name: string;
  eng_name: string;
  position: string;
  alias_name: string;
  image: string;
  birth: string;
  height: string;
  hobby: string;
  motto: string;
  career: string[];
  favorite_player: string;
  greetings: string;
}

interface CheerSquadItemProps {
  cheerSquad: CheerSquad;
}

const CheerSquadItem: React.FC<CheerSquadItemProps> = ({ cheerSquad }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className="flex cursor-pointer flex-col rounded-lg bg-slate-50 p-3 shadow-md transition-all duration-300 hover:bg-gray-200"
      onClick={toggleAccordion}
    >
      <div className="flex items-center">
        <aside className="mr-4 flex flex-col items-center">
          <img
            src={cheerSquad.image}
            alt={cheerSquad.name}
            className="mb-2 h-32 w-32 rounded-2xl"
          />
        </aside>

        <article className="flex flex-1 flex-col items-start justify-center">
          <h1 className="text-lg font-semibold">{cheerSquad.position}</h1>
          <p className="mb-1 text-gray-700">{cheerSquad.name}</p>
          <p className="mb-1 text-gray-700">{cheerSquad.eng_name}</p>
        </article>
      </div>

      <Accordion isOpen={isOpen}>
        <div className="mt-4 rounded-lg border-2 border-zinc-300 bg-white p-4">
          <div className="grid grid-cols-2">
            <PlayerDetailInfo title="별명" content={cheerSquad.alias_name} />
            <PlayerDetailInfo title="생년월일" content={cheerSquad.birth} />
            <PlayerDetailInfo title="키" content={`${cheerSquad.height}cm`} />
            <PlayerDetailInfo
              title="좋아하는 kt wiz 선수"
              content={cheerSquad.favorite_player}
            />
            <PlayerDetailInfo title="취미" content={cheerSquad.hobby} />
            <PlayerDetailInfo title="좌우명" content={cheerSquad.motto} />
          </div>
          <PlayerDetailInfo
            title="주요경력"
            content={cheerSquad.career.join(', ')}
          />
          <PlayerDetailInfo
            title="kt wiz 팬들에게 인사말"
            content={cheerSquad.greetings}
          />
        </div>
      </Accordion>
    </section>
  );
};

export default CheerSquadItem;
