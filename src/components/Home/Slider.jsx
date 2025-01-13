import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import Banner from './Banner';
import bannerImg1 from '../../assets/banner1.jpg'
import bannerImg2 from '../../assets/banner2.jpg'
import bannerImg3 from '../../assets/banner3.jpg'
const Slider = () => {
    return (
        <div>
            <Swiper
      modules={[Navigation, Pagination, Scrollbar,Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      // navigation
      pagination={{ clickable: true }}
      
      
    >
       <SwiperSlide> <Banner title={'Find Your Dream Scholarship Today!'} subtitle={' Explore top universities, discover exclusive scholarships, and apply with ease—all in one place.'} img={bannerImg1}/></SwiperSlide>
      <SwiperSlide><Banner title={'Empower Your Education with the Right Scholarship!'} subtitle={'Search, filter, and apply for scholarships that match your academic goals and qualifications."'} img={bannerImg2}/></SwiperSlide>
     
      <SwiperSlide> <Banner title={'Unlock Global Opportunities for Higher Studies!'} subtitle={'Access scholarships from prestigious institutions and take your education to the next level'} img={bannerImg3}/></SwiperSlide>
    </Swiper> 
        </div>
    );
};

export default Slider;