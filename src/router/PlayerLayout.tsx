import Header from '../components/header/header';
import ContentLayout from '../components/content/content-layout';
import ktHeaderImg from '../assets/ktHeaderImg.png';
import PlayerCategory from '../components/player/player-category';

interface PlayerLayoutProps {
  children?: React.ReactNode;
}

const PlayerLayout: React.FC<PlayerLayoutProps> = ({ children }) => {
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
          {children}
        </ContentLayout>
      </main>
    </>
  );
};

export default PlayerLayout;
