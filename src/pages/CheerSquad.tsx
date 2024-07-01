import ContentLayout from '../components/content/content-layout';
import ktHeaderImg from '../assets/ktHeaderImg.png';
import Header from '../components/header/header';
import CheerSquadGrid from '../components/cheer/cheer-squad-grid';
import PlayerSearch from '../components/player/player-search';

const CheerSquadPage = () => {
  return (
    <>
      <Header
        bgImage={ktHeaderImg}
        title="응원단"
        description="kt wiz꽃! kt wiz의 응원단"
      />
      <main>
        <ContentLayout>
          <PlayerSearch />
          <CheerSquadGrid />
        </ContentLayout>
      </main>
    </>
  );
};

export default CheerSquadPage;
