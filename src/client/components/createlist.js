import React from 'react';

class CreateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleCreateList = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onCreateList(this.state.input);
    this.setState({ input: '' });
  };

  handleChangeList = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div className='createlist'>
      <form onSubmit={ this.handleCreateList } >
      <input
        onChange={ this.handleChangeList }
        placeholder='new list'
        type='text'
        value={ this.state.input }
      />
      </form>
      </div>
    );
  }
}

CreateList.propTypes = {
  onCreateList: React.PropTypes.func.isRequired,
};

export default CreateList;

