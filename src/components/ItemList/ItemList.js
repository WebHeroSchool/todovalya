import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ homework, book, workout }) => (<ul>
	<li>{homework} </li>
	<li><Item book={book} /></li>
	<li>{workout} </li>
</ul>)
	;

export default ItemList