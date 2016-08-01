import React from 'react'
import { IDLE } from '../actions/api'

const Spinner = ({ api }) => {
  if (api.lists === IDLE && api.tasks === IDLE) {
    return (<div className='spinner'></div>)
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
