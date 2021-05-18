import React, { createRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BScroll from "better-scroll"
import styles from './Home.module.scss';
// import Main from '@/routes/main/Main';
// Import Swiper styles
import 'swiper/swiper.scss';

import Page1 from '../main/Page1';
import Page2 from '../main/Page2';
import Page3 from '../main/Page3';
import Page4 from '../main/Page4';
import Page5 from '../main/Page5';
import Page6 from '../main/Page6';
import Page7 from '../main/Page7';
import styles_main from '../main/Main.module.scss';

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
			<div className={styles_main.menu} style={{ opacity: this.props.active > 0 ? 1 : 0 }}>
				<Swiper
					slidesPerView="3"
					centeredSlides={true}
					onSwiper={this.props.getSwiper}
					onSlideChange={(i) => {
						this.props.scrollContent.scrollToElement(this.props.rItems[i.activeIndex + 1].current, 1000)
					}}
				>
					{menus.map((menu) => (
						<SwiperSlide key={menu.value}>
							{({ isActive }) => (
								<div
									className={`${styles_main.menuItem} ${
										isActive ? styles_main.active : null
									} ${styles_main['menuItem' + menu.value]}`}
								>
									<div className={styles_main.label}>
										{menu.label}
									</div>
									<img src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/line.png'} alt="indicator" />
								</div>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		);
	}
}

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { menuSwiper: null, active: 0 };
		this.rItems = [createRef(), createRef(), createRef(), createRef(), createRef(), createRef(), createRef(), createRef()]
		this.rItemsHeight = []
	}

	componentDidMount () {
		let itemHeight = 0
		this.rItemsHeight.push(itemHeight)
		this.rItems.forEach(item => {
			itemHeight += item.current.clientHeight
			this.rItemsHeight.push(itemHeight)
		})

		const wrapper = document.querySelector('.wrapper')
    //选中DOM中定义的 .wrapper 进行初始化
    this.scrollContent = new BScroll(wrapper, {
      scrollX: false,
      click: true,
      scrollY: true,
			probeType: 2
    })
		this.scrollContent.on("scrollEnd", pos => {
			const scrollY =	Math.abs(pos.y)
			const active = this.rItemsHeight.findIndex((v, i) => {
				return scrollY >= this.rItemsHeight[i] && scrollY < this.rItemsHeight[i + 1]
			})
			const index = active > 0 ? active : 0
			this.setState({
				active: index
			})
			// if (this.rItems[index] && this.rItems[index].current) {
			// 	this.scrollContent.scrollToElement(this.rItems[index].current, 1000)
			// }
			if (this.state.menuSwiper && index > 0) {
				this.state.menuSwiper.slideTo(index - 1)
			}
		})
		this.scrollContent.on("scroll", pos => {
			const scrollY =	Math.abs(pos.y)
			const active = this.rItemsHeight.findIndex((v, i) => {
				return scrollY >= this.rItemsHeight[i] && scrollY < this.rItemsHeight[i + 1]
			})
			const index = active > 0 ? active : 0
			this.setState({
				active: index
			})
			if (this.state.menuSwiper && index > 0) {
				this.state.menuSwiper.slideTo(index - 1)
			}
		})
	}

	render () {
		return (
			<div>
				<Menu
					active={this.state.active}
					getSwiper={(s) => {
						this.setState({ menuSwiper: s });
					}}
					rItems={this.rItems}
					scrollContent={this.scrollContent}
				/>
				<div
					className="wrapper" 
					style={{
						width: '100%',
						overflow: 'hidden',
						height: '100vh'
					}}
				>
					<div>
						<div className={styles.content} ref={this.rItems[0]}>
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
						<div ref={this.rItems[1]}>
							<Page1 />
						</div>
						<div ref={this.rItems[2]}>
							<Page2 />
						</div>
						<div ref={this.rItems[3]}>
							<Page3 />
						</div>
						<div ref={this.rItems[4]}>
							<Page4 />
						</div>
						<div ref={this.rItems[5]}>
							<Page5 />
						</div>
						<div ref={this.rItems[6]}>
							<Page6 />
						</div>
						<div ref={this.rItems[7]}>
							<Page7 />
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default Home;
