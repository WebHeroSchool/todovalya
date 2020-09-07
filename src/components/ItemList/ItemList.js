import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul>
	{items.map(item =>
		<li className={styles.list} key={item.id}>
			<div className={styles.check}>
				<Checkbox
					checked={item.isDone}
					tabIndex={-1}
					onClick={() => onClickDone(item.id)}
				/>
			</div>
			<Item
				value={item.value}
				isDone={item.isDone}
				id={item.id}
			/>
			<div className={styles.delete}>
				<DeleteIcon
					onClick={() => onClickDelete(item.id)}
				/>
			</div>
		</li>)}
</ul>);

export default ItemList