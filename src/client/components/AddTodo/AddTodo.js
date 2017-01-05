import React from 'react';
import styled from 'styled-components';
import Icon from 'antd/lib/icon';

const Wrapper = styled.div`
  padding: 0px;
  margin-top: 10px;
  text-align: center;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const TextInput = styled.input`
  margin: 0px;
  margin-right: 5px;
  width: 85%;
  height: 25px;
`;

class AddTodo extends React.Component {
	state = {
		value: '',
	}
	handleChange = event => this.setState({value: event.target.value})
	handleClick = (value) => {
		const { onAdd } = this.props;
		onAdd(value);
		this.setState({value: ''});
	}

	render() {
        const { value } = this.state;
        const { onAdd } = this.props;
		return (
		<Wrapper>
		  <TextInput placeholder="Add a new Todo ..." onChange={this.handleChange} value={value} />
          <Icon type="plus" onClick={() => this.handleClick(value)} />
		</Wrapper>
		)
	}
};

AddTodo.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
};

export default AddTodo;
