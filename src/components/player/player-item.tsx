import AccordionItem from '../ui/accordion/accordion-item';
import PlayerDetailInfo from './player-detail-info';

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
  category_detail?: string;
}

interface PlayerItemProps {
  player: Player;
}

const PlayerItem: React.FC<PlayerItemProps> = ({ player }) => {
  const header = (
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
  );

  const details = (
    <div className="grid grid-cols-2">
      <PlayerDetailInfo title="포지션" content={player.position} />
      <PlayerDetailInfo title="생년월일" content={player.birth} />
      <PlayerDetailInfo
        title="체격"
        content={`${player.height}cm - ${player.weight}kg`}
      />
      <PlayerDetailInfo
        title="출신교"
        content={
          player.elementarySchool ||
          player.middleSchool ||
          player.highSchool ||
          player.university ||
          player.professional
            ? [
                player.elementarySchool,
                player.middleSchool,
                player.highSchool,
                player.university,
                player.professional,
              ]
                .filter(Boolean)
                .join(' - ')
            : '정보가 없습니다'
        }
      />
    </div>
  );

  return <AccordionItem header={header} details={details} />;
};

export default PlayerItem;
