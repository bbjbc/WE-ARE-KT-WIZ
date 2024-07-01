import { useLocation } from 'react-router-dom';

import Header from '../components/header/header';
import ContentLayout from '../components/content/content-layout';
import ktHeaderImg from '../assets/ktHeaderImg.png';
import PlayerCategory from '../components/player/player-category';
import PlayerSearch from '../components/player/player-search';

interface PlayerLayoutProps {
  children?: React.ReactNode;
}

const PlayerLayout: React.FC<PlayerLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Header
        bgImage={ktHeaderImg}
        title="kt wiz 선수단 소개"
        description="kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다."
      />
      <main>
        <ContentLayout>
          <PlayerCategory />
          {location.pathname !== '/players' && (
            <PlayerSearch placeholder="선수 이름을 검색해보세요!" />
          )}
          {children}
        </ContentLayout>
      </main>
    </>
  );
};

export default PlayerLayout;
