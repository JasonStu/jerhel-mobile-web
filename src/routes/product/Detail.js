import React, { useState } from 'react';
import _ from 'lodash';
import styles from './Detail.module.scss';
const Detail = ({ setVisible, detail }) => {
	const [item] = useState(detail.items);
	const [imgIndex, setImgIndex] = useState(0);
	const [preViewImg, setPreViewImg] = useState(false);
	const goodsImgs = item.items_open_image.concat(item.items_closed_image)
	const gImgs = goodsImgs

	return (
		<div className={styles.content}>
			<img alt="" className={styles.logo} src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/logo_white.png'} />
			<img
				alt=""
				className={styles.close}
				src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/close.png'}
				onClick={() => setVisible(false)}
			/>
			<div onClick={() => { setPreViewImg(true) }} className={styles.bigImage} style={{ backgroundImage: `url(${gImgs[imgIndex] && gImgs[imgIndex].url ? gImgs[imgIndex].url : 'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/images2/default3.png'})` }}>
			</div>
			{goodsImgs && goodsImgs.length > 0 && <div className={styles.thumbnails}>
				{_.map(goodsImgs, (v, i) => (
					<div onClick={() => { setImgIndex(i) }} key={i} className={styles.thumbnail} style={{ backgroundImage: `url(${v.url || 'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/images2/default3.png'})` }}>
					</div>
				))}
			</div>}
			<div className={styles.detail}>
				<div className={styles.title}>SHAPE FILTER</div>
				<div className={styles.row}>
					<span className={styles.label}>Container Sub Type</span>
					<span className={styles.value}>{item.line.name}</span>
				</div>
				<div className={styles.row}>
					<span className={styles.label}>Container Material</span>
					<span className={styles.value}>{item.cover_material || '--'}</span>
				</div>
				<div className={styles.row}>
					<span className={styles.label}>L/W/H</span>
					<span className={styles.value}>{item.length || '--'} × {item.width || '--'} × {item.height || '--'} mm</span>
				</div>
				<div className={styles.row}>
					<span className={styles.label}>Volume</span>
					<span className={styles.value}>{item.capacity} ml</span>
				</div>
				<div className={styles.btn}>INQUIRY</div>
			</div>

			{preViewImg &&
			<div
				className={styles.preViewModal}
				onClick={() => { setPreViewImg(false) }}
			>
				<img onClick={e => { e.stopPropagation() }} alt="" className={styles.preViewImg} src={gImgs[imgIndex] && gImgs[imgIndex].url ? gImgs[imgIndex].url : 'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/images2/default3.png'} />
			</div>}
		</div>
	);
};
export default Detail;
