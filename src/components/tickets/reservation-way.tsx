import IntroductionItem from '../content/introduction-item';
import { IoMdAppstore } from 'react-icons/io';
import { MdStadium } from 'react-icons/md';
import { FaPhone, FaExternalLinkAlt } from 'react-icons/fa';
import Button from '../ui/button/button';
import ReservationItem from './reservation-item';

const ReservationWay = () => {
  return (
    <IntroductionItem title="예매/구매 방법">
      <article className="w-full space-y-4">
        <ReservationItem
          icon={<IoMdAppstore size={24} className="text-red-700" />}
          title="kt wiz 전용 wizzap앱"
          description={
            <Button className="rounded-md border border-red-700 text-sm text-red-700 hover:bg-red-500 hover:text-white">
              <a
                href="https://play.google.com/store/apps/details?id=kr.co.ktwiz.wizzap"
                target="_blank"
                rel="noreferrer"
              >
                앱 설치
              </a>
            </Button>
          }
          custom={0}
        />

        <ReservationItem
          icon={<FaPhone size={24} className="text-red-700" />}
          title="티켓링크 콜센터"
          description="1588-7890"
          custom={1}
        />

        <ReservationItem
          icon={<FaExternalLinkAlt size={24} className="text-red-700" />}
          title="kt wiz 홈페이지 티켓 예매"
          description={
            <a
              href="https://www.ticketlink.co.kr/sports/baseball/62#reservation"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-red-700 underline duration-200 hover:text-red-400"
            >
              티켓링크에서 예매하기
            </a>
          }
          custom={2}
        />

        <ReservationItem
          icon={<MdStadium size={24} className="text-red-700" />}
          title="kt wiz park 매표소"
          description="현장 구매"
          custom={3}
        />
      </article>
    </IntroductionItem>
  );
};

export default ReservationWay;
