import React from 'react';

export default class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.input !== this.state.input) {
      return true;
    }
    return false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddList(this.state.input);
    this.setState({ input: '' });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className='List' onSubmit={this.handleSubmit}>
        <h2>New List :</h2>
        <form>
          <input onChange={this.handleChange} type='text' value={this.state.input}></input>
        </form>
      </div>);
  }
}

AddList.propTypes = { onAddList: React.PropTypes.func.isRequired };
