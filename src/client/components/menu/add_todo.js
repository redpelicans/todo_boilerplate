import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

class AddTodo extends React.Component {

  state = {
    input: '',
  };

  handleInputChange = e => this.setState({ input: e.target.value });

  handleInputValidation = () => {
    const { dispatch, onAdd } = this.props;
    const { input } = this.state;
    dispatch(onAdd(input));
    this.setState({ input: '' });
  }

  render() {
    const { input } = this.state;
    return (
      <Wrapper>
        <input type="text" placeholder="title" value={input} onChange={this.handleInputChange} />
        <button onClick={this.handleInputValidation}>+</button>
      </Wrapper>
    );
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddTodo;
