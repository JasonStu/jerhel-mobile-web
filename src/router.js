import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './router.module.scss';
import Header from '@/components/Header';
import Home from './routes/home/Home';
import Product from './routes/product/Product';

function RouterConfig() {
	return (
		<Router>
			<div className={styles.main}>
				<Header />
				<div className={styles.content}>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/product">
							<Product />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default RouterConfig;
