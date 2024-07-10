import { classNames } from '../../../utils/classNames';

interface SliderRowProps {
  items: string[];
  direction: 'left' | 'right';
}

const SliderRow: React.FC<SliderRowProps> = ({ items, direction }) => {
  const tripledItems = [...items, ...items, ...items];

  return (
    <section className="relative overflow-hidden whitespace-nowrap py-3">
      {/* 왼쪽 부분 그라데이션 */}
      <aside className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-10 bg-gradient-to-r from-sky-600 to-transparent" />

      {/* 오른쪽 부분 그라데이션 */}
      <aside className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-10 bg-gradient-to-l from-red-600 to-transparent" />

      <div
        className={classNames(
          'inline-block whitespace-nowrap',
          direction === 'left' ? 'animate-reverse' : 'animate-slide',
        )}
      >
        {tripledItems.map((item, index) => (
          <span
            key={index}
            className="inline-block px-3 text-3xl font-extrabold"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SliderRow;
