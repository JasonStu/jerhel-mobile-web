import React from 'react';
import styles from './Detail.module.scss';

import logoIcon from '@/assets/logo_white.png';
import closeIcon from '@/assets/close.png';
const Detail = ({ setVisible }) => {
	return (
		<div className={styles.content}>
			<img alt="" className={styles.logo} src={logoIcon} />
			<img
				alt=""
				className={styles.close}
				src={closeIcon}
				onClick={() => setVisible(false)}
			/>
			<div className={styles.bigImage}>
				<img alt="" src={'/image/product_detail/big.png'} />
			</div>
			<div className={styles.thumbnails}>
				<div className={styles.thumbnail}>
					<img alt="" src={'/image/product_detail/small.png'} />
				</div>
				<div className={styles.thumbnail}>
					<img alt="" src={'/image/product_detail/small.png'} />
				</div>
				<div className={styles.thumbnail}>
					<img alt="" src={'/image/product_detail/small.png'} />
				</div>
				<div className={styles.thumbnail}>
					<img alt="" src={'/image/product_detail/small.png'} />
				</div>
			</div>
			<div className={styles.detail}>
				<div className={styles.title}>SHAPE FILTER</div>
				<div className={styles.row}>
					<span className={styles.label}>Container Sub Type</span>
					<span className={styles.value}>Lip gloss</span>
				</div>
				<div className={styles.row}>
					<span className={styles.label}>Container Material</span>
					<span className={styles.value}>PCR-PET</span>
				</div>
				<div className={styles.row}>
					<span className={styles.label}>L/W/H</span>
					<span className={styles.value}>18.5 × 18.5 × 91.95 mm</span>
				</div>
				<div className={styles.row}>
					<span className={styles.label}>Volume</span>
					<span className={styles.value}>3.35 ml</span>
				</div>
				<div className={styles.btn}>INQUIRY</div>
			</div>
		</div>
	);
};
export default Detail;
