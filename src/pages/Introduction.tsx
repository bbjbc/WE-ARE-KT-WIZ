import Header from '../components/header/header';
import ktIntroImg from '../assets/ktIntroImg.png';
import ktHeaderImg from '../assets/ktHeaderImg.png';
import ContentLayout from '../components/content/content-layout';

const IntroductionPage = () => {
  return (
    <>
      <Header
        bgImage={ktHeaderImg}
        title="kt wiz는?"
        description="한국 프로야구의 '10번째 심장' kt wiz를 소개합니다."
      />
      <ContentLayout>
        <img src={ktIntroImg} alt="kt wiz" className="w-full" />
      </ContentLayout>
    </>
  );
};

export default IntroductionPage;
