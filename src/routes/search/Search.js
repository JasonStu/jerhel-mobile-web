import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import _ from 'lodash';
import { request } from '@/utils/http.js'
import styles from './Search.module.scss';
import searchIcon from '../../assets/search.png';
import closeIcon from '../../assets/close.png';
const options = [
	{ value: 'product', label: 'NEW PRODUCTS' },
	{ value: 'bottle', label: 'JAR/BOTTLE' },
	{ value: 'series', label: 'ECO-FRIENDLY SERIES' },
];
const primaryColor = '#681F9A';

const customStyles = {
	option: (provided, state) => ({
		...provided,
		borderBottom: '1px dotted pink',
		color: 'white',
		fontFamily: 'AlibabaSans-Regular, AlibabaSans',
		backgroundColor: state.isSelected ? primaryColor : '#333',
		border: 'none',
		'&:active': {
			backgroundColor: primaryColor,
		},
	}),
	control: (provided, state) => ({
		...provided,
		borderRadius: '40px',
		border: '1px solid #ededed',
		boxShadow: 'none',
		'&:hover': {
			borderColor: 'transparent',
		},
	}),
	menu: (provided, state) => ({
		...provided,
		margin: 0,
		padding: 0,
	}),
	menuList: (provided, state) => ({
		...provided,
		padding: 0,
	}),
	indicatorSeparator: (provided, state) => ({
		...provided,
		display: 'none',
	}),
};

const Search = withRouter(({ history, setVisible }) => {
	const [selectedOption, setSelectedOption] = useState(options[0]);
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
				src={closeIcon}
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
						<img src={searchIcon} alt="search" />
					</span>
				</div>
				<Select
					defaultValue={selectedOption}
					className={styles.select}
					classNamePrefix="react-select"
					styles={customStyles}
					onChange={setSelectedOption}
					options={options}
				/>
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
