import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
	state = {
		items: [
			{
				value: 'Почитать книгу',
				isDone: true
			},
			{
				value: 'Испечь торт',
				isDone: true
			},
			{
				value: 'Сделать уборку',
				isDone: false
			}
		]
	};

	onClickDone = isDone => console.log(isDone);

	render() {
		return (
			<div className={styles.wrap}>
				<h1 className={styles.title}>Важные дела:</h1>
				<InputItem />
				<ItemList items={this.state.items} onClickDone={this.onClickDone} />
				<Footer count={1} />
			</div >);
	}
};

export default App;