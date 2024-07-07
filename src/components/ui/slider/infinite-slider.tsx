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
    <div className="bg-gradient-to-r from-sky-600 to-red-600 text-white">
      <SliderRow items={expandedTopItems} direction="right" />
      <SliderRow items={expandedBottomItems} direction="left" />
    </div>
  );
};

export default InfiniteSlider;
