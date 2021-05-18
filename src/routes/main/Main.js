import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = { innerSwiper: null, menuSwiper: null, active: 1 };
	}

	render() {
		return (
			<div className={styles.main} style={{}}>
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
				</Swiper>
			</div>
		);
	}
}

export default Main;
