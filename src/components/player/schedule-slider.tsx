import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import marchImg from '../../assets/schedule/march.jpg';
import aprilImg from '../../assets/schedule/april.jpg';
import mayImg from '../../assets/schedule/may.jpg';
import juneImg from '../../assets/schedule/june.jpg';
import julyImg from '../../assets/schedule/july.jpg';
import augustImg from '../../assets/schedule/august.jpg';
import { CustomNextArrow, CustomPrevArrow } from '../ui/carousel/arrow-button';

const ScheduleSlider = () => {
  const settings = {
    infinite: true, //무한 반복 옵션
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 300, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: false, // 자동 스크롤 사용 여부
    autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: <CustomPrevArrow />, // 이전 화살표 모양 설정
    nextArrow: <CustomNextArrow />, // 다음 화살표 모양 설정
    dotsClass: 'slick-dots',
    draggable: true, //드래그 가능 여부
  };

  const scheduleImages = [
    { src: marchImg, alt: '3월 일정' },
    { src: aprilImg, alt: '4월 일정' },
    { src: mayImg, alt: '5월 일정' },
    { src: juneImg, alt: '6월 일정' },
    { src: julyImg, alt: '7월 일정' },
    { src: augustImg, alt: '8월 일정' },
  ];

  return (
    <Slider {...settings}>
      {scheduleImages.map((image, index) => (
        <img
          src={image.src}
          alt={image.alt}
          key={index}
          className="w-full rounded-lg"
        />
      ))}
    </Slider>
  );
};

export default ScheduleSlider;
