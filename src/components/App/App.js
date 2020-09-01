import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const homework = 'Сделать ДЗ';
const book = 'Прочитать книгу';
const workout = 'Выполнить тренировку';

const App = () => (<div>
	<h1>Важные дела:</h1>
	<InputItem />
	<ItemList homework={homework} book={book} workout={workout} />
	<Footer count={3} />
</div>);

export default App;