import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { addElem, deleteElem, doneElem, enableRenameElem,
  inputAddElem, inputRenameElem, renameElem } from '../actions/elems';
import { addList, deleteList, inputAddList, inputRenameList, renameList, enableRenameList } from '../actions/lists';

const App = (props) => (
  <Todo {...props} />
);

App.propTypes = {
  elems: React.PropTypes.object.isRequired,
  lists: React.PropTypes.object.isRequired };

export default connect(state => ({ elems: state.elems, lists: state.lists }),
  { onAddElem: addElem,
    onAddList: addList,
    onDeleteElem: deleteElem,
    onDeleteList: deleteList,
    onDoneElem: doneElem,
    onEnableRenameElem: enableRenameElem,
    onEnableRenameList: enableRenameList,
    onInputAddElem: inputAddElem,
    onInputAddList: inputAddList,
    onInputRenameElem: inputRenameElem,
    onInputRenameList: inputRenameList,
    onRenameElem: renameElem,
    onRenameList: renameList })(App);
