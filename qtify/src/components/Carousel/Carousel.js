import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Card/Card";
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Carousel = ({ Songs }) => {
    const swiperRef = useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className="swiper-container">
            <Swiper
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={8}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                loop={false}
                className="mySwiper"
            >
                {Songs && Songs.map(song => (
                    <SwiperSlide key={song.id}>
                        <div className="swiper-slide-content">
                            <Card key={song.id} cardImgUrl={song.image} cardImgAlt={song.slug} chipLabel={song.follows} cardSongName={song.title} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev" onClick={goPrev}>

            </div>
            <div className="swiper-button-next" onClick={goNext}>

            </div>
        </div>
    )
}

export default Carousel;