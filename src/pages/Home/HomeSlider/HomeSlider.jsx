import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import './homeSlider.css'
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const HomeSlider = () => {
    return (
        <div className='px-2 md:px-0'>
            <div className='mt-20'>
                <SectionHeader subTitle={"From 11:00am to 10:00pm"} title={"order Online"}></SectionHeader>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper font-serif minW"
            >
                <SwiperSlide className=''>
                    <img className='w-full' src={slide1} alt="" />
                    <p className='font-bold md:text-xl relative bottom-10 text-center text-white'>Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide2} alt="" />
                    <p className='font-bold md:text-xl relative bottom-10 text-center text-white '>Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide3} alt="" />
                    <p className='font-bold md:text-xl relative bottom-10 text-center text-white '>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide4} alt="" />
                    <p className='font-bold md:text-xl relative bottom-10 text-center text-white '>Cake</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide5} alt="" />
                    <p className='font-bold md:text-xl relative bottom-10 text-center text-white '>Salad</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HomeSlider;