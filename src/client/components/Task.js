import React from 'react';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enable: false,
      input: '' };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if ((nextState.input !== this.state.input) || (nextState.enable !== this.state.enable)) {
      return true;
    }
    return false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRenameTask(this.props.id, this.state.input);
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
    this.props.onDeleteTask(this.props.id);
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
    <div className='Elem'>
      <p>{this.props.description}</p>
      {this.input(this.state.enable)}
      <button onClick={this.handleEnableClick}>{this.button(this.state.enable)}</button>
      <button onClick={this.handleDeleteClick}>Delete</button>
    </div>
    );
  }

}

Task.propTypes = {
  description: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
  onDeleteTask: React.PropTypes.func.isRequired,
  onRenameTask: React.PropTypes.func.isRequired };
