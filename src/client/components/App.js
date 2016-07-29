import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { addTask, deleteTask, fetchTasks, renameTask } from '../actions/tasks';
import { addList, deleteList, fetchLists, renameList } from '../actions/lists';
import { getAlphaSortLists, getAlphaSortTasks } from '../selectors';

const mapStatetoProps = (state) => ({
  isFetching: state.isFetching,
  lists: getAlphaSortLists(state),
  tasks: getAlphaSortTasks(state) });

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.onFetchLists();
    this.props.onFetchTasks();
  }

  render() {
    return (<Todo {...this.props} />);
  }
}

App.propTypes = {
  onFetchLists: React.PropTypes.func.isRequired,
  onFetchTasks: React.PropTypes.func.isRequired };

export default connect(mapStatetoProps,
  { onAddTask: addTask,
    onAddList: addList,
    onDeleteTask: deleteTask,
    onDeleteList: deleteList,
    onFetchLists: fetchLists,
    onFetchTasks: fetchTasks,
    onRenameTask: renameTask,
    onRenameList: renameList })(App);
