import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count, onClickFooter }) => (
	<div className={styles.text}>
		Осталось выполнить: {count}
	</div>);

export default Footer;