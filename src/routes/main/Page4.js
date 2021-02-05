import React from 'react';
import styles from './Main.module.scss';

const Page4 = () => {
	return (
		<div className={`${styles.page} ${styles.page4} enableScroll`}>
			<div className={styles.intro}>
				<img src="/image/intro.png" alt="introduce" />
			</div>
			<div className={styles.textSection}>
				<h3 className={styles.title}>LIVE LIFE IN FULL COLOR</h3>
				<div className={styles.tags}>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>COLOR MATCHING</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>CONSISTENCY</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>CUSTOMIZATION</span>
					</div>
				</div>
				<p>Color speaks volumes.</p>
				<p>
					Make your message heard loud and clear with the full beauty
					of color and wide array of quality finishes.
				</p>
				<p>
					No detail is sparred with our in-house custom color matching
					laboratory. Don’t just paint by the numbers– develop a truly
					unique color experience for the consumer.
				</p>
			</div>
		</div>
	);
};
export default Page4;
