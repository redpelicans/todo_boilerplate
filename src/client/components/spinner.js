import React from 'react'
import { BUSY, IDLE } from '../actions/api'

const Spinner = ({ api }) => {
  console.log(api);
  if (api.lists === IDLE && api.tasks === IDLE) {
    return (<div></div>)
  }
  return (
    <div className='spinner'>
      <div className='rect1'></div>
      <div className='rect2'></div>
      <div className='rect3'></div>
      <div className='rect4'></div>
      <div className='rect5'></div>
    </div>)
}

Spinner.propTypes = {
  api: React.PropTypes.object.isRequired,
}

export default Spinner
