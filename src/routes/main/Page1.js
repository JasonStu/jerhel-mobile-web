import React, { useState } from 'react';
import styles from './Main.module.scss';
import center from '@/assets/main_page_1/center.png';
import icon1 from '@/assets/main_page_1/icon_1.png';
import icon2 from '@/assets/main_page_1/icon_2.png';
import icon3 from '@/assets/main_page_1/icon_3.png';
import more from '@/assets/main_page_1/more.png';
import right from '@/assets/main_page_1/right.png';

import Modal from '@/components/Modal';
const Page1 = () => {
	const [visible, setVisible] = useState(false);
	return (
		<div className={`${styles.page} ${styles.page1}`}>
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
				<h3 className={styles.title}>AN ORIGINATOR AND INNOVATOR</h3>
				<div className={styles.divider} />
				<p>
					Jerhél has been providing high-quality packaging for the
					cosmetic and pharmaceutical industry for over 30 years. The
					team behind several key industry innovations, such as the
					first ever compact with a living hinge, was Jerhél.
				</p>
				<p>
					With uncompromising quality and unparalleled precision in
					design, Jerhél provides a wide-range of products and
					services. We specialize in plastic injection and blow molded
					products, and offer turnkey solutions. Our R&D team leads
					the charge of constant improvement in part design, product
					functionality, manufacturing processes and material
					sciences.
				</p>
			</div>
			<Modal visible={visible} onClose={() => setVisible(false)}>
				<div className={styles.productModal}>
					<img alt="" src={right} />
					<div className={styles.title}>Side Scroll bar</div>
					<p>
						Landing page should be only graphics, with no copy
						Section 2: is first page with copy. Should have purple
						top bar “Options to Protect the Planet”
						<br></br>
						Graphic: Items made from PCR and paper with Recyling/FSC
						logos
					</p>
					<p>
						-Landing page should be only graphics, with no copy
						Section 2: is first page with copy. Should have purple
						top bar
					</p>
				</div>
			</Modal>
		</div>
	);
};
export default Page1;
