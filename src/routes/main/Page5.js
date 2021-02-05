import React, { useState } from 'react';
import styles from './Main.module.scss';
import center from '@/assets/main_page_5/center.png';
import icon1 from '@/assets/main_page_5/icon_1.png';
import icon2 from '@/assets/main_page_5/icon_2.png';
import icon3 from '@/assets/main_page_5/icon_3.png';
import right from '@/assets/main_page_5/right.png';
import more from '@/assets/main_page_1/more.png';

import Modal from '@/components/Modal';
const Page5 = () => {
	const [visible, setVisible] = useState(false);
	return (
		<div className={`${styles.page} ${styles.page5} enableScroll`}>
			<div className={styles.block}>
				<div className={styles.inner}>
					<img
						alt="sec_1_center"
						src={center}
						className={styles.centerImg}
					/>
					<div className={styles.bottomMenu}>
						<div className={styles.imageWr}>
							<img
								alt="sec_1_icon1"
								src={icon1}
								className={styles.icon}
							></img>
							<img
								alt="sec_1_icon1"
								src={icon2}
								className={styles.icon}
							></img>
							<img
								alt="sec_1_icon1"
								src={icon3}
								className={styles.icon}
							></img>
						</div>
						<img
							className={styles.more}
							src={more}
							alt=""
							onClick={() => setVisible(true)}
						/>
					</div>
				</div>
			</div>
			<div className={styles.textSection}>
				<div className={styles.title}>PRODUCT LAUNCH PROGRAM</div>
				<div className={styles.subtitle}>Decades of Experience</div>
				<div className={styles.tags}>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>CONCEPTUAL DESIGN</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>
							PARTS, TOOLING DESIGN & FABRICATION
						</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>ON TIME DELIVERY</span>
					</div>
				</div>
				<p>
					A dedicated Project Coordinator oversees every facet of your
					project and will keep you up to date every step of the way.
				</p>
				<p>
					We have the flexibility and attentiveness to deliver what
					you need when you need it with short lead times and quick
					product turnaround.
				</p>
				<p>Click below to explore more.</p>
			</div>
			<Modal visible={visible} onClose={() => setVisible(false)}>
				<div className={styles.productModal}>
					<img alt="" src={right} />
					<div className={styles.title}>Conceptual Design</div>
					<p>
						Bring us your current idea or let one of our experienced
						marketing specialists introduce you to the latest
						designs that suit your packaging needs. Our innovative
						design team will keep you one step ahead of the
						competition.
					</p>
					<p>
						Once a concept has been settled upon, our design team
						will develop this concept into three dimensional
						drawings, a working model and develop new colors.
					</p>
					<p>
						Our product engineering team—consisting of individuals
						with a lifetime of experience in cosmetic packaging—will
						ensure your packaging is robust.
					</p>
					<p>
						3D drawing, Modeling Shop, In-house custom color
						development; There is nothing related to cosmetics
						packaging that is beyond our reach.
					</p>
				</div>
			</Modal>
		</div>
	);
};
export default Page5;
