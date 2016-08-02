/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'

const ListHead = ({ id, label, onDelList }) => (
  <div className='padded'>
    <span>{label}</span>
    <button id={id} onClick={e => onDelList(e.target.id)}>-</button>
  </div>
)

ListHead.propTypes = {
  id: React.PropTypes.number.isRequired,
  label: React.PropTypes.string.isRequired,
}

export default ListHead
