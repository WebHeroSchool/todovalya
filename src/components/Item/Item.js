import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone }) => (
	<span
		className={
			classnames({
				[styles.item]: true,
				[styles.done]: isDone
			})
		}>
		{value}
	</span>);

Item.defaultProps = {
	items: {
		value: "Важные дела отсутствуют"
	}
  
export default Item;