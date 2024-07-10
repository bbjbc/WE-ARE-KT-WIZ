import SliderRow from './slider-row';

interface InfiniteSliderProps {
  topItems: string[];
  bottomItems: string[];
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  topItems,
  bottomItems,
}) => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-red-600 blur-sm filter"></div>

      <div className="relative z-10 text-white">
        <SliderRow items={topItems} direction="right" />
        <SliderRow items={bottomItems} direction="left" />
      </div>
    </section>
  );
};

export default InfiniteSlider;
