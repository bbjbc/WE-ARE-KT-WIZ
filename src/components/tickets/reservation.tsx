import IntroductionItem from '../content/introduction-item';
import ktTicket from '../../assets/ktTicket.png';
import Button from '../ui/button/button';

const Reservation = () => {
  return (
    <IntroductionItem title="티켓 예매하기">
      <article className="w-full">
        <p>예매를 통해서 kt wiz 경기를 경기장에서 직접 만나 보세요.</p>
        <div className="flex justify-center">
          <img
            src={ktTicket}
            alt="kt wiz ticket"
            className="flex h-28 w-28 items-center justify-center rounded-lg"
          />
        </div>

        <div className="mt-4 flex w-full flex-col justify-center gap-2">
          <Button className="rounded-md border border-blue-700 bg-sky-500 text-sm text-white hover:bg-blue-900 hover:text-white">
            <a
              href="https://www.ticketlink.co.kr/sports/baseball/62#reservation"
              target="_blank"
              rel="noreferrer"
            >
              티켓링크로 예매
            </a>
          </Button>
          <Button className="rounded-md border border-red-700 text-sm text-red-700 hover:bg-red-500 hover:text-white">
            <a
              href="https://www.ktwiz.co.kr/ticket/reservation"
              target="_blank"
              rel="noreferrer"
            >
              kt wiz 공홈 예매
            </a>
          </Button>
        </div>
      </article>
    </IntroductionItem>
  );
};

export default Reservation;
