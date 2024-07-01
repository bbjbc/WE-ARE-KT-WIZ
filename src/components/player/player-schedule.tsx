import ScheduleSlider from './schedule-slider';

const PlayerSchedule = () => {
  return (
    <section className="mb-12">
      <article className="my-4">
        <h1 className="text-lg font-extrabold text-red-700">경기 일정</h1>
        <div className="w-1/6 border-t-4 border-red-500"></div>
      </article>
      <ScheduleSlider />
    </section>
  );
};

export default PlayerSchedule;
