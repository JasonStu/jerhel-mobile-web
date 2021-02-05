import React from 'react';
import styles from './Main.module.scss';
const Page6 = () => {
	return (
		<div className={`${styles.page} ${styles.page6} enableScroll`}>
			<div className={styles.textSection}>
				<h3 className={styles.title}>NATURAL BEAUTY</h3>
				<p>
					True sustainability starts on the factory floor and takes
					the entire supply chain into account.
				</p>
				<p>
					Our PCR and Bio-resin packaging solutions can lower your
					products environmental impact without any loss in quality.
				</p>
			</div>
		</div>
	);
};
export default Page6;
