import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { request } from '@/utils/http.js'
import styles from './Search.module.scss';
// const options = [
// 	{ value: 'product', label: 'NEW PRODUCTS' },
// 	{ value: 'bottle', label: 'JAR/BOTTLE' },
// 	{ value: 'series', label: 'ECO-FRIENDLY SERIES' },
// ];

const Search = withRouter(({ history, setVisible }) => {
	// const [selectedOption, setSelectedOption] = useState(options[0]);
	const [goodsList, setGoodsList] = useState([]);

	const getCategoryList = (obj = {}) => {
		request({
			url: '/websiteApi/items/getCategoryList',
			method: 'get',
			data: _.cloneDeep({...obj})
		})
		.then(res => {
			if (res.code === 1) {
				setGoodsList(res.data)
			}
		})
		.catch(err => {
			console.log(err)
		})
	}

	useEffect(() => {
		getCategoryList()
	}, [])

	return (
		<div className={styles.content}>
			<img
				src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/close.png'}
				alt="close"
				className={styles.close}
				onClick={() => setVisible(false)}
			/>
			<div className={styles.top}>
				<div className={styles.inputWr}>
					<input type="text" placeholder="Search" onInput={_.debounce(function (v) {
						getCategoryList({ name: v.target.value })
					}, 500)} />
					<span className={styles.suffix}>
						<img src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/search.png'} alt="search" />
					</span>
				</div>
				{/* <Select
					defaultValue={selectedOption}
					className={styles.select}
					classNamePrefix="react-select"
					styles={customStyles}
					onChange={setSelectedOption}
					options={options}
				/> */}
			</div>
			<div className={styles.list}>
				{_.map(goodsList, (item, index) => (
					<div
						className={styles.item}
						key={index}
						onClick={() => {
							setVisible(false);
							if (history.location.pathname === `/product`) {
								history.replace(`/product`, {
									id: item.id
								});
								history.go(0)
							} else {
								history.push(`/product`, {
									id: item.id
								});
							}
						}}
					>
						<div className={styles.imgBox} style={{ backgroundImage: `url(${item.url || `https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/images2/default.png`})` }} />
						<div className={styles.label}>{item.name}</div>
					</div>
				))}
			</div>
		</div>
	);
});

export default Search;
