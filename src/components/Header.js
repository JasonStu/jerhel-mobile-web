import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Header.module.scss';

import Search from '@/routes/search/Search';
const Header = withRouter(({ history }) => {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<div className={styles.header}>
				<img
					className={styles.menu}
					src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/menu.png'}
					alt="menu"
					onClick={() => setVisible(!visible)}
				/>
				<img
					className={styles.logo}
					src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/logo_white.png'}
					alt="logo"
					onClick={() => history.push('/')}
				/>
			</div>
			{visible && <Search setVisible={setVisible} />}
		</>
	);
});

export default Header;
