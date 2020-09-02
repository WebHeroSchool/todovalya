import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ({ items }) => (<ul>
	{items.map(item =>
		<li className={styles.list} key={item.value}>
			<div className={styles.check}>
				<Checkbox />
			</div>
			<Item
				value={item.value}
				isDone={item.isDone} />
			<div className={styles.delete}>
				<DeleteIcon />
			</div>
		</li>)}
</ul>);

export default ItemList