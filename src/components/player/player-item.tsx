import { useState } from 'react';

import Accordion from '../ui/accordion/accordion';

interface Player {
  id: string;
  name: string;
  eng_name: string;
  number: string;
  position: string;
  image: string;
  birth: string;
  height: string;
  weight: string;
  elementarySchool?: string;
  middleSchool?: string;
  highSchool?: string;
  university?: string;
  professional?: string;
  category: string;
  category_detail: string;
}

interface PlayerItemProps {
  player: Player;
}

const PlayerItem: React.FC<PlayerItemProps> = ({ player }) => {
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
            src={player.image}
            alt={player.name}
            className="mb-2 h-32 w-32 rounded-2xl"
          />
        </aside>

        <article className="flex flex-1 flex-col items-start justify-center">
          <h1 className="text-lg font-semibold">{player.name}</h1>
          <p className="mb-1 text-gray-700">{player.eng_name}</p>
          <p className="mb-1 inline text-red-700">
            No. <span>{player.number}</span>
          </p>
          <p className="inline text-red-700">
            {player.category === '타자'
              ? player.category_detail
              : player.category}
            ({player.position})
          </p>
        </article>
      </div>

      {/* 아코디언 펼치면 나타나는 세부정보 */}
      <Accordion isOpen={isOpen}>
        <div className="mt-4">
          <p className="flex flex-col">
            포지션
            <span className="text-sm text-gray-700">{player.position}</span>
          </p>
          <p className="flex flex-col">
            생년월일
            <span className="text-sm text-gray-700">{player.birth}</span>
          </p>
          <p className="flex flex-col">
            체격
            <span className="text-sm text-gray-700">
              {player.height}cm - {player.weight}kg
            </span>
          </p>
          {(player.elementarySchool ||
            player.middleSchool ||
            player.highSchool ||
            player.university ||
            player.professional) && (
            <p className="flex flex-col">
              출신교
              <span className="text-sm text-gray-700">
                {[
                  player.elementarySchool,
                  player.middleSchool,
                  player.highSchool,
                  player.university,
                  player.professional,
                ]
                  .filter(Boolean)
                  .join('-')}
              </span>
            </p>
          )}
        </div>
      </Accordion>
    </section>
  );
};

export default PlayerItem;
