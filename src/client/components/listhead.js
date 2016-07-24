/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'

const ListHead = ({ id, title, onDelList }) => (
  <div className='padded'>
    <span>{title}</span>
    <button id={id} onClick={onDelList}>-</button>
  </div>
)

ListHead.propTypes = {
  id: React.PropTypes.number.isRequired,
  onDelList: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
}

export default ListHead
