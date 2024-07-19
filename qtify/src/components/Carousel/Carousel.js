import React, { useRef } from "react";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/swiper-bundle.min.css';
import LeftButton from '../LeftButton/LeftButton';
import RightButton from '../RightButton/RightButton';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';

SwiperCore.use([Navigation]);


const Carousel = ({ Songs, isSong = false }) => {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };


    return (
        <div className="swiper-container">
            <Swiper
                ref={swiperRef}
                navigation={{
                    prevEl: '.left-button',
                    nextEl: '.right-button',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 1,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 1,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 1,
                    },
                }}
            >
                {Songs && Songs.map(song => {
                    const ChipLabel = isSong ? song.likes : song.follows;
                    return (<SwiperSlide key={song.id}>
                        <div className="swiper-slide-content">
                            <Card key={song.id} cardImgUrl={song.image} cardImgAlt={song.slug} chipLabel={ChipLabel} cardSongName={song.title} isSong={isSong} />
                        </div>
                    </SwiperSlide>)
                })}
            </Swiper>
            <LeftButton onClick={handlePrev} />
            <RightButton onClick={handleNext} />
        </div >
    )
}

export default Carousel;