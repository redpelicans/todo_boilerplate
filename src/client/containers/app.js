import React from 'react';
import CreateList from '../components/createlist';
import TodoList from '../components/todolist';
import Title from '../components/title';
import Refresh from '../components/refresh';
import Spinner from '../components/spinner';
import { createList, fetchList, removeList } from '../actions/lists';
import { createTask, removeTask } from '../actions/tasks';
import { sortAlphaListSelector, sortAlphaTaskSelector } from '../selectors';
import { connect } from 'react-redux';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.onFetchList();
  };

  onCreateList = (input) => {
    this.props.dispatch(createList(input));
  };

  onFetchList = () => {
    this.props.dispatch(fetchList());
  };

  onRemoveList = (listId) => {
    this.props.dispatch(removeList(listId));
  };

  onCreateTask = (input, listId) => {
    this.props.dispatch(createTask(input, listId));
  };

  onRemoveTask = (taskId) => {
    this.props.dispatch(removeTask(taskId));
  };

  onRefresh = () => {
    this.props.dispatch(fetchList());
  };

  onSpinner = (isFetching) => {
    if (isFetching === true) {
      return <Spinner/>;
    }
    return null;
  };

  render() {
    return (
      <div className='todoapp'>
      <Title title='Marianne&#39;s todo list'/>
      <Refresh onRefresh={ this.onRefresh } />
      <CreateList
        onCreateList={ this.onCreateList }
      />
      { this.onSpinner(this.props.isFetching) }
      <TodoList
        lists={ this.props.lists }
        onCreateTask={ this.onCreateTask }
        onRemoveList={ this.onRemoveList }
        onRemoveTask={ this.onRemoveTask }
        tasks={ this.props.tasks }
      />
      </div>
    );
  }
}

TodoApp.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  lists: React.PropTypes.array.isRequired,
  tasks: React.PropTypes.array.isRequired,
};

export default connect(state => ({
  lists: sortAlphaListSelector(state),
  isFetching: state.isFetching,
  tasks: sortAlphaTaskSelector(state),
}))(TodoApp);
