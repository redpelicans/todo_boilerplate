import React from 'react';

const RefreshButton = ({ ...actions }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    actions.refresher();
  };

  return (
    <div className='refreshbutton'>
      <button onClick={ handleClick }>Raffraichir</button>
    </div>
    );
};

export default RefreshButton;
