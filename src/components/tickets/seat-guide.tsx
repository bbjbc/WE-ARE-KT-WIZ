import IntroductionItem from '../content/introduction-item';
import ktSeatGuide from '../../assets/ktSeatGuide.png';

const SeatGuide = () => {
  return (
    <IntroductionItem title="좌석 안내도 및 입장 요금">
      <img
        src={ktSeatGuide}
        alt="kt wiz seat guide"
        className="item-center flex h-full w-full justify-center rounded-lg"
      />
    </IntroductionItem>
  );
};

export default SeatGuide;
