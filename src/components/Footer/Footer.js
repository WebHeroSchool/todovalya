import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ count }) => (
	<div className={styles.text}>
		Осталось выполнить: {count}
	</div>);

Footer.propTypes = {
	count: PropTypes.number.isRequired
};

export default Footer;