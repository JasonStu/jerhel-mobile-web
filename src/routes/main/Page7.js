import React from 'react';
import styles from './Main.module.scss';
const Page7 = () => {
	return (
		<div className={`${styles.page} ${styles.page7} enableScroll`}>
			<div className={styles.contentWr}>
				<div className={styles.content}>
					<img className={styles.logo} src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/logo.png'} alt="logo" />
					<div className={styles.title}>
						CONNECT WITH JERHÉL TO GET STARTED
					</div>
					<input type="text" placeholder="First name" />
					<input type="text" placeholder="Last name" />
					<input type="email" placeholder="Email" />
					<textarea placeholder="Content" rows="4" />
					<div className={styles.contactBtn}>
						CONTACT
						<span className={styles.arrow}>
							<img src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/arrow.png'} alt="arrow" />
						</span>
					</div>
				</div>
			</div>
			<div className={styles.intro}>
				<img className={styles.logo} src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/logo.png'} alt="logo" />
				<div className={styles.subscribeWr}>
					<div className={styles.btn}>
						Subscribe to our newsletter
					</div>
					<input type="text" placeholder="Email" />
				</div>
				<div className={styles.item}>
					<div className={styles.label}>SOCIAL MEDIA</div>
					<div className={styles.value}>
						<img src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/twitter.png'} alt="twitter" />
						<img src={'https://jerhel.oss-cn-hongkong.aliyuncs.com/upload/mobile/instagram.png'} alt="instagram" />
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.label}>ADDRESS</div>
					<div className={styles.value}>
						63 New Hook Road, Bayonne, NJ 07002
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.label}>PHONE</div>
					<div className={styles.value}>Tel: 201-436-6662</div>
					<div className={styles.value}>
						Dial 213 for Inside Sales, 202 for Customer Service
					</div>
					<div className={styles.value}>Fax: 201-436-6121</div>
				</div>
				<div className={styles.item}>
					<div className={styles.label}>EMAIL CONTACTS</div>
					<div className={styles.value}>Sales: sales@jerhel.com</div>
					<div className={styles.value}>
						General Information: info@jerhel.com
					</div>
				</div>
			</div>
			<div className={styles.divider}></div>
			<div className={styles.copyright}>
				Copyright 2020, JERHEL PLASTICS, INC. all rights reserved.
			</div>
		</div>
	);
};
export default Page7;
