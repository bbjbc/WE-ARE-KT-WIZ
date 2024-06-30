import Header from '../components/header/header';
import ContentLayout from '../components/content/content-layout';
import ktHeaderImg from '../assets/ktHeaderImg.png';
import ReservationWay from '../components/tickets/reservation-way';
import Reservation from '../components/tickets/reservation';
import SeatGuide from '../components/tickets/seat-guide';
import Discount from '../components/tickets/discount';

const TicketsPage = () => {
  return (
    <>
      <Header
        bgImage={ktHeaderImg}
        title="티켓 예매"
        description="kt wiz 경기를 경기장에서 직접 만나 보세요."
      />
      <main>
        <ContentLayout>
          <section className="my-6 space-y-8">
            <ReservationWay />
            <Reservation />
            <SeatGuide />
            <Discount />
          </section>
        </ContentLayout>
      </main>
    </>
  );
};

export default TicketsPage;
