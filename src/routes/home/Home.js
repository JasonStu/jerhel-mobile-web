import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Home.module.scss';
import Main from '@/routes/main/Main';
// Import Swiper styles
import 'swiper/swiper.scss';
const Home = () => {
	return (
		<Swiper direction="vertical" noSwipingClass="enableScroll">
			<SwiperSlide>
				<div className={styles.content}>
					<img alt="logo" className={styles.logo} src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/logo.png'} />
					<div className={styles.title}>
						THE LEADER IN COSMETICS PACKAGING
					</div>
					<div className={styles.subtitle}>
						Brilliant packaging is integral to the consumer
						experience. Done right it leaves a lasting impression
						and builds loyalty. It showcases the product without
						ever taking the spotlight itself.
					</div>
					<div className={styles.bottomText}>
						JERHÉL PACKAGING LET'S YOUR BRAND SHINE
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<Main />
			</SwiperSlide>
		</Swiper>
	);
};

export default Home;
