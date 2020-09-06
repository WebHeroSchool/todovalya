import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
	state = {
		inputValue: '',
		errorMsg: '',
		isError: false
	};

	onButtonClick = () => {
		if (this.state.inputValue !== '') {
			this.setState({
				inputValue: '',
				errorMsg: '',
				isError: false,
			});
			this.props.onClickAdd(this.state.inputValue);
		} else {
			this.setState({
				errorMsg: 'Заполните поле!',
				isError: true,
			});
		}
	};

	changeUppercase = event => {
		this.setState({ inputValue: event.target.value.toUpperCase() });
	};

	render() {
		return (
			<div>
				<TextField
					error={this.state.error}
					id="outlined-full-width"
					style={{ margin: 8 }}
					placeholder="Добавить задание"
					helperText={this.state.errorMsg}
					fullWidth
					margin="normal"
					InputLabelProps={{
						shrink: true,
					}}
					variant="outlined"
					value={this.state.inputValue}
					onChange={this.changeUppercase}
				/>
				<Button
					variant="contained"
					color="primary"
					fullWidth
					onClick={() => this.onButtonClick()}
				>
					Добавить
					</Button>
			</div>);
	}
}

export default InputItem; 