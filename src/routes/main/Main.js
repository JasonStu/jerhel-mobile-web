import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import styles from './Main.module.scss';
import line from '@/assets/line.png';
const menus = [
	{ label: 'An Originator and Innovator', value: '1' },
	{ label: 'From Concept To Consumer', value: '2' },
	{ label: 'Elegance Meets Precision', value: '3' },
	{ label: 'Live Life Full Of Color', value: '4' },
	{ label: 'Moving At The Speed Of Fashion', value: '5' },
	{ label: 'Natural Beauty', value: '6' },
	{ label: 'Connect with JerhÉl To Get Started', value: '7' },
];

class Menu extends React.Component {
	render() {
		return (
			<div className={styles.menu}>
				<Swiper
					slidesPerView="3"
					centeredSlides={true}
					onSwiper={this.props.getSwiper}
					onSlideChange={(i) => {
						this.props.innerSwiper.slideTo(i.activeIndex);
					}}
				>
					{menus.map((menu) => (
						<SwiperSlide key={menu.value}>
							{({ isActive }) => (
								<div
									className={`${styles.menuItem} ${
										isActive ? styles.active : null
									} ${styles['menuItem' + menu.value]}`}
								>
									<div className={styles.label}>
										{menu.label}
									</div>
									<img src={line} alt="indicator" />
								</div>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		);
	}
}

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = { innerSwiper: null, menuSwiper: null, active: 1 };
	}

	render() {
		return (
			<div className={styles.main} style={{}}>
				<Menu
					active={this.state.active}
					getSwiper={(s) => {
						this.setState({ menuSwiper: s });
					}}
					innerSwiper={this.state.innerSwiper}
				/>
				<Swiper
					onSwiper={(i) => {
						this.setState({ innerSwiper: i });
					}}
					roundLengths={true}
					slidesPerView="auto"
					freeMode={true}
					autoHeight={true}
					direction="vertical"
					onSlideChange={(i) => {
						this.state.menuSwiper.slideTo(i.activeIndex);
					}}
					// controller={{ control: this.state.menuSwiper }}
				>
					<SwiperSlide>
						<Page1 />
					</SwiperSlide>
					<SwiperSlide>
						<Page2 />
					</SwiperSlide>
					<SwiperSlide>
						<Page3 />
					</SwiperSlide>
					<SwiperSlide>
						<Page4 />
					</SwiperSlide>
					<SwiperSlide>
						<Page5 />
					</SwiperSlide>
					<SwiperSlide>
						<Page6 />
					</SwiperSlide>
					<SwiperSlide>
						<Page7 />
					</SwiperSlide>
				</Swiper>
			</div>
		);
	}
}

export default Main;
