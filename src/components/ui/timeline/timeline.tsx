import { Chrono } from 'react-chrono';

import { KtTimelineData } from '../../../mocks/kt-timeline-data';

const Timeline = () => {
  const customItems = KtTimelineData.map((item) => ({
    cardTitle: item.cardTitle,
    cardSubtitle: item.cardSubtitle,
    cardDetailedText: (
      <>
        {item.cardDetailedText.map((text, index) => (
          <span key={index} className="mb-1 flex items-start text-sm">
            <span className="mr-2">•</span>
            <span>{text}</span>
          </span>
        ))}
      </>
    ),
  }));

  return (
    <div className="-mx-4 w-full">
      <Chrono
        items={customItems}
        mode="VERTICAL"
        disableToolbar
        theme={{
          primary: '#DF7401', // 타임라인 주색상
          secondary: '#9AFE2E', // 타임라인 동그라미 색상
          cardBgColor: '#81F7F3', // 카드 배경 색상
          cardSubtitleColor: '#DF3A01', // 카드 서브타이틀 색상
          cardTitleColor: '#1C1C1C', // 카드 타이틀 색상
          cardDetailsColor: '#424242', // 카드 세부사항 색상
        }}
      />
    </div>
  );
};

export default Timeline;
