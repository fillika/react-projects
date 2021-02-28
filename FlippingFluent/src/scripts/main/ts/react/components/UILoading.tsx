import React from 'react';

export default function UILoading() {
  return (
    <div className='ui-loading'>
      <div className="ui-bg" data-flip-key="bg"></div>
      <div className='load-square-container'>
        <div className='load-square'></div>
        <div className='load-square'></div>
        <div className='load-square'></div>
        <div className='load-square'></div>
      </div>
    </div>
  );
}
