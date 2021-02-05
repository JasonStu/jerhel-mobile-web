import React, { useState } from 'react';
import Detail from './Detail';
import styles from './Product.module.scss';
import _ from 'lodash';
const productList = _.times(8, (index) => ({
	image: `/image/products/product_${index + 3}.png`,
	label: 'PAN SIZE FILTER',
}));
const Product = () => {
	const [visible, setVisible] = useState(false);
	const [active, setActive] = useState(0);
	return (
		<>
			<div className={styles.page}>
				<div className={styles.title}>NEW PRODUCTS</div>
				<div className={styles.filters}>
					<div
						className={`${styles.item} ${
							active === 0 ? styles.active : ''
						}`}
						onClick={() => setActive(0)}
					>
						SHAPE FILTER
					</div>
					<div
						className={`${styles.item} ${
							active === 1 ? styles.active : ''
						}`}
						onClick={() => setActive(1)}
					>
						CAPACITY FILTER
					</div>
					<div
						className={`${styles.item} ${
							active === 2 ? styles.active : ''
						}`}
						onClick={() => setActive(2)}
					>
						PAN SIZE FILTER
					</div>
				</div>
				<div className={styles.list}>
					{_.map(productList, (item, index) => (
						<div
							className={styles.item}
							key={index}
							onClick={() => setVisible(true)}
						>
							<img alt="" src={item.image}></img>
							<div className={styles.label}>{item.label}</div>
						</div>
					))}
				</div>
			</div>
			{visible && <Detail setVisible={setVisible} />}
		</>
	);
};
export default Product;
