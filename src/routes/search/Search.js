import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import _ from 'lodash';
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
const productList = _.times(6, (index) => ({
	image: `/image/search/product_${index + 1}.png`,
	label: 'NEW PRODUCTS',
}));
const Search = withRouter(({ history, setVisible }) => {
	const [selectedOption, setSelectedOption] = useState(options[0]);

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
					<input type="text" placeholder="Search" />
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
				{_.map(productList, (item, index) => (
					<div
						className={styles.item}
						key={index}
						onClick={() => {
							setVisible(false);
							history.push('/product');
						}}
					>
						<img alt="" src={item.image}></img>
						<div className={styles.label}>{item.label}</div>
					</div>
				))}
			</div>
		</div>
	);
});

export default Search;
