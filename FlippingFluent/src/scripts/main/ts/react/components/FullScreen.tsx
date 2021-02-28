import React from 'react';

export default function FullScreen() {
  return (
    <div className='ui-screen-full'>
      <div className="ui-bg" data-flip-key="bg"></div>
      <div className='ui-toolbar'></div>
      <div className='ui-emails'></div>
      <div className='ui-email'>
        <div className='ui-heading' data-flip-key="emails">7 new emails</div>
      </div>
    </div>
  );
}
