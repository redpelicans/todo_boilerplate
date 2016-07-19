import React from 'react'
import Todo from './Todo'
import _ from 'lodash'

export default class App extends React.Component {
  static propTypes = {
    lists: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { lists: props.lists };
  }

  addElem = (newname, idList) => {
    const { lists } = this.state;
    const newId = _.size(lists[idList].elems) + 1;
    this.setState({
      lists: {
        ...lists,
        [idList]: {
          ...lists[idList],
          elems: {
            ...lists[idList].elems,
            [newId]: { name: newname } } } } });
  }

  deleteElem = (idElem, idList) => {
    const { lists } = this.state;
    this.setState({
      lists: {
        ...lists,
        [idList]: {
          ...lists[idList],
          elems: _.omit(lists[idList].elems, idElem) } } });
  }

  renameElem = (newname, idElem, idList) => {
    const { lists } = this.state;
    this.setState({
      lists: {
        ...lists,
        [idList]: {
          ...lists[idList],
          elems: {
            ...lists[idList].elems,
            [idElem]: {
              ...lists[idList].elems[idElem],
              name: newname } } } } });
  }

  addList = (newname) => {
    const { lists } = this.state;
    const newId = _.size(lists) + 1;
    this.setState({
      lists: {
        ...lists,
        [newId]: {
          name: newname,
          elems: {} } } });
  }

  deleteList = (idList) => {
    const { lists } = this.state;
    this.setState({ lists: _.omit(lists, idList) });
  }

  renameList = (newname, idList) => {
    const { lists } = this.state;
    this.setState({
      lists: {
        ...lists,
        [idList]: {
          ...lists[idList],
          name: newname } } });
  }

  functions = {
    addElem: this.addElem,
    deleteElem: this.deleteElem,
    renameElem: this.renameElem,
    addList: this.addList,
    deleteList: this.deleteList,
    renameList: this.renameList }

  render() {
    return <Todo functions={ this.functions } lists={ this.state.lists } />
  }
}
