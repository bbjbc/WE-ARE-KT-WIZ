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
}

interface PlayerItemProps {
  player: Player;
}

const PlayerItem: React.FC<PlayerItemProps> = ({ player }) => {
  return (
    <section className="flex items-center rounded-lg bg-slate-50 p-3 shadow-md">
      <aside className="mr-6 flex flex-col items-center">
        <img
          src={player.image}
          alt={player.name}
          className="mb-2 h-32 w-32 rounded-2xl"
        />
        <h3 className="text-xl font-semibold">{player.name}</h3>
        <span className="text-xs text-gray-500">{player.eng_name}</span>
      </aside>
      <div>
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
    </section>
  );
};

export default PlayerItem;
