import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

function App() {
	const initialState = {
		items: [
			{
				value: 'Почитать книгу',
				isDone: true,
				id: 1
			},
			{
				value: 'Испечь торт',
				isDone: false,
				id: 2
			},
			{
				value: 'Сделать уборку',
				isDone: false,
				id: 3
			}
		],
		count: 3
	};

	const [items, setItems] = useState(initialState.items);
	const [count, setCount] = useState(initialState.count);

	useEffect(() => {
		console.log('update');
	});

	useEffect(() => {
		console.log('mount');
	}, []);

	const onClickDone = id => {
		const newItemList = items.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}
			return newItem;
		});

		setItems(newItemList);
	};

	const onClickDelete = id => {
		const newList = items.filter(item => item.id !== id);
		setItems(newList);
		setCount(count => count - 1);
	};

	const onClickAdd = value => {
		const newItems = [
			...items,
			{
				value,
				isDone: false,
				id: count + 1
			}
		];
		setItems(newItems);
		setCount(count => count + 1);
	};

	return (
		<div className={styles.wrap}>
			<h1 className={styles.title}>Важные дела:</h1>
			<InputItem onClickAdd={onClickAdd} />
			<ItemList
				items={items}
				onClickDone={onClickDone}
				onClickDelete={onClickDelete}
			/>
			<Footer count={count} />
		</div>);
};

export default App;