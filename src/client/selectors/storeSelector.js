import { createSelector } from 'reselect'

const getApiStatus = state => state.api
const getLists = state => state.lists
const getTasks = state => state.tasks

const storeSelector = createSelector(
  getApiStatus, getLists, getTasks,
  (api, lists, tasks) => ({ api, lists, tasks })
)

export default storeSelector
