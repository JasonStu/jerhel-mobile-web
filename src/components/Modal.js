import React from 'react';
import closeIcon from '@/assets/close.svg';
import styles from './Modal.module.scss';

import { Modal } from 'antd-mobile';
const CModal = ({ children, visible, onClose }) => {
	return (
		<Modal transparent visible={visible}>
			<div className={styles.modalHeader}>
				<div className={styles.close} onClick={() => onClose()}>
					<img src={closeIcon} alt="close" />
				</div>
			</div>
			<div className={styles.contentContainer}>{children}</div>
		</Modal>
	);
};
export default CModal;
