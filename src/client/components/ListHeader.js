import React from 'react';

export default class ListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      enable: false };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if ((nextState.input !== this.state.input) || (nextState.enable !== this.state.enable)) {
      return true;
    }
    return false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRenameList(this.props.id, this.state.input);
    this.setState({
      input: '',
      enable: false });
  }

  handleEnableClick = () => {
    this.setState({
      ...this.state,
      enable: !(this.state.enable) });
  }

  handleDeleteClick = () => {
    this.props.onDeleteList(this.props.id);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value });
  }

  button = (enable) => {
    if (enable === true) {
      return ('Close');
    }
    return ('Rename');
  }

  input = (enable) => {
    if (enable === true) {
      return (<form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} type='text' value={this.state.input}></input>
      </form>);
    }
    return (null);
  }

  render() {
    return (
    <div className='ListHeader'>
      <h2>{this.props.name}</h2>
      {this.input(this.state.enable)}
      <button onClick={this.handleEnableClick}>{this.button(this.state.enable)}</button>
      <button onClick={this.handleDeleteClick}>Delete</button>
    </div>
    );
  }
}

ListHeader.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  onDeleteList: React.PropTypes.func.isRequired,
  onRenameList: React.PropTypes.func.isRequired };
