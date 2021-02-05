import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Header.module.scss';

import logo from '@/assets/logo_white.png';
import menu from '@/assets/menu.png';

import Search from '@/routes/search/Search';
const Header = withRouter(({ history }) => {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<div className={styles.header}>
				<img
					className={styles.menu}
					src={menu}
					alt="menu"
					onClick={() => setVisible(!visible)}
				/>
				<img
					className={styles.logo}
					src={logo}
					alt="logo"
					onClick={() => history.push('/')}
				/>
			</div>
			{visible && <Search setVisible={setVisible} />}
		</>
	);
});

export default Header;
