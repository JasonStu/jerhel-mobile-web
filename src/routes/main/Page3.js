import React from 'react';
import styles from './Main.module.scss';

const Page3 = () => {
	return (
		<div className={`${styles.page} ${styles.page3} enableScroll`}>
			<div className={styles.model}>
				<img src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/model.png'} alt="model" />
			</div>
			<div className={styles.textSection}>
				<h3 className={styles.title}>ELEGANCE MEETS PRECISION</h3>
				<div className={styles.tags}>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>PRECISION</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>HIGH QUALITY</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>FAST TURN-AROUND</span>
					</div>
				</div>
				<p>
					Jerhél provides a marriage of expert craftsmanship and a
					keen eye for detail.
				</p>
				<p>
					We create the feel and aesthetic your brand needs. Based on
					the concept we develop together, our team will design the
					tooling necessary to manufacture your product to the highest
					quality industry standards.
				</p>
				<p>
					Strategic global partnerships with tool makers leads to
					better timing and better pricing for our customers.
				</p>
			</div>
		</div>
	);
};
export default Page3;
