import styles from './header.module.scss';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Header = () => {
    return (
        <div className={styles.header}>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className={styles.mySwiper}
            >
                <SwiperSlide className={styles.slide}>
                    <img src="https://images.pexels.com/photos/7615618/pexels-photo-7615618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="https://images.pexels.com/photos/7615618/pexels-photo-7615618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="https://images.pexels.com/photos/7615618/pexels-photo-7615618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Header;