import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom'
import Detail from './Detail';
import { Icon } from 'antd-mobile'
import styles from './Product.module.scss';
import { request } from '@/utils/http.js'
import _ from 'lodash';

const params = {
	page: 1,
	limit: 100000,
	line_id: null
}

const filterParams = {
	shape: null,
	// capacity: [0, 100],
	// min_diameter: 0,
	// max_diameter: 100
}

const Product = withRouter(({ history }) => {
	const query = useHistory().location.state
	const [visible, setVisible] = useState(false);
	const [isShowItem, setShowItem] = useState(false);
	const [lineList, setLineList] = useState([]);
	const [itemList, setItemList] = useState([]);
	const [itemDetail, setItemDetail] = useState(null);
	// const [active, setActive] = useState(0);

	const getLineList = () => {
		request({
			url: '/websiteApi/items/getLineList',
			method: 'get',
			data: {
				category_id: query.id
			}
		})
		.then(res => {
			if (res.code === 1) {
				setLineList(res.data)
			}
		})
		.catch(err => {
			console.log(err)
		})
	}

	const getItemsList = (obj = {}) => {
		request({
			url: '/websiteApi/items/getItemsList',
			data: _.cloneDeep({...params, ...obj})
		})
		.then(res => {
			if (res.code === 1) {
				setItemList(res.data.rows)
				setShowItem(true)
			}
		})
		.catch(err => {
			console.log(err)
		})
	}

	const getItemsDetail = (id) => {
		request({
			url: '/websiteApi/items/getItemsDetail',
			method: 'get',
			data: { id }
		})
		.then(res => {
			if (res.code === 1) {
				setItemDetail(res.data)
				setVisible(true)
			}
		})
		.catch(err => {
			console.log(err)
		})
	}

	useEffect(() => {
		getLineList()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div className={styles.page}>
				<Icon type="cross" className={styles.closeIcon} onClick={() => {
					if (isShowItem) {
						setShowItem(false)
					} else {
						history.goBack()
					}
				}} />
				<div className={styles.title}>{isShowItem ? 'Item' : 'Line (Sub Catorgory)'}</div>
				{/* <div className={styles.filters}>
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
				</div> */}
				<div className={styles.list}>
					{!isShowItem && _.map(lineList, (item, index) => (
						<div
							className={styles.item}
							key={index}
							onClick={() => {
								params.line_id = item.id
								getItemsList({...filterParams})
							}}
						>
							<div className={styles.imgBox} style={{ backgroundImage: `url(${item.url || 'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/images2/default.png'})` }} />
							<div className={styles.label}>{item.name}</div>
						</div>
					))}

					{isShowItem && _.map(itemList, (item, index) => (
						<div
							className={styles.item}
							key={index}
							onClick={() => {
								getItemsDetail(item.id)
							}}
						>
							<div className={styles.imgBox} style={{ backgroundImage: `url(${item.items_open_image && item.items_open_image[0] ? item.items_open_image[0].url : `https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/images2/default.png`})` }} />
							<div className={styles.label}>{item.item_id}</div>
						</div>
					))}
				</div>
			</div>
			{visible && <Detail setVisible={setVisible} detail={itemDetail} />}
		</>
	);
});
export default Product;
