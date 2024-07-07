import SliderRow from './slider-row';

interface InfiniteSliderProps {
  topItems: string[];
  bottomItems: string[];
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  topItems,
  bottomItems,
}) => {
  const expandedTopItems = [...topItems, ...topItems, ...topItems];
  const expandedBottomItems = [...bottomItems, ...bottomItems, ...bottomItems];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-red-600 blur-sm filter"></div>

      <div className="relative z-10 text-white">
        <SliderRow items={expandedTopItems} direction="right" />
        <SliderRow items={expandedBottomItems} direction="left" />
      </div>
    </div>
  );
};

export default InfiniteSlider;
