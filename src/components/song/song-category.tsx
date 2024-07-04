import TabButton from '../ui/tab/tab-button';

interface SongCategoryProps {
  selectedTab: 'player' | 'team';
  onSelectTab: (tab: 'player' | 'team') => void;
}

const SongCategory: React.FC<SongCategoryProps> = ({
  selectedTab,
  onSelectTab,
}) => {
  return (
    <div className="mb-2 grid w-full grid-cols-2 gap-1 rounded-lg bg-gray-100 p-1 text-sm">
      <TabButton
        isActive={selectedTab === 'player'}
        label="선수 응원가"
        onClick={() => onSelectTab('player')}
      />
      <TabButton
        isActive={selectedTab === 'team'}
        label="팀 응원가"
        onClick={() => onSelectTab('team')}
      />
    </div>
  );
};

export default SongCategory;
