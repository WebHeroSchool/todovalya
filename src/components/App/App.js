import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const todoItem = 'Написать новое приложение'

const App = () => {
	const items = [
		{
			value: 'Написать новое приложение',
			isDone: true
		},
		{
			value: 'Прописать props',
			isDone: true
		},
		{
			value: 'Сделать все дела',
			isDone: false
		}
	];

	return (
		<div className={styles.wrap}>
			<h1 className={styles.title}>Важные дела:</h1>
			<InputItem />
			<ItemList items={items} />
			<Footer count={1} />
		</div >);
}

export default App;