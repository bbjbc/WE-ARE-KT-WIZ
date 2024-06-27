import Header from '../components/header/header';
import ktIntroImg from '../assets/ktIntroImg.png';
import ktHeaderImg from '../assets/ktHeaderImg.png';
import ktIntroBottomImg from '../assets/ktIntroBottomImg.png';
import ContentLayout from '../components/content/content-layout';
import IntroductionContent from '../components/content/introduction-content';

const IntroductionPage = () => {
  return (
    <>
      <Header
        bgImage={ktHeaderImg}
        title="kt wiz는?"
        description="한국 프로야구의 '10번째 심장' kt wiz를 소개합니다."
      />
      <main>
        <ContentLayout>
          <img src={ktIntroImg} alt="kt wiz" className="w-full rounded-xl" />
          <IntroductionContent />
        </ContentLayout>
      </main>
      <footer>
        <img src={ktIntroBottomImg} alt="kt wiz" className="w-full" />
      </footer>
    </>
  );
};

export default IntroductionPage;
