import React from 'react';

export default class InputFormList extends React.Component {
  state = {
    input: '',
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.input !== this.state.input) {
      return true;
    }
    return false;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSubmitAddList(this.state.input);
    this.setState({ input: '' });
  }

  handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className={ name }>
        <form onSubmit={ this.handleSubmit }>
          <input
            onChange={ this.handleChange }
            placeholder='New list...'
            type='text'
            value={ this.state.input }
          />
        </form>
      </div>
    );
  }
}

InputFormList.propTypes = {
  onSubmitAddList: React.PropTypes.func.isRequired,
};
