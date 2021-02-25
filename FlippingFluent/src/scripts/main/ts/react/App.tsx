import React from 'react';
import { useState } from 'react';
import FullScreen from './components/FullScreen';
import NewEmails from './components/NewEmails';
import UILoading from './components/UILoading';

export default function App() {
  const stateMachine = {
    initial: 'loading',
    states: {
      loading: {
        on: {
          CLICK: 'half',
        },
      },
      half: {
        on: {
          CLICK: 'full',
        },
      },
      full: {
        on: {
          CLICK: 'loading',
        },
      },
    },
  };

  const [currentState, setCurrentState] = useState(stateMachine.initial);

  const transition = (state: string, event: string) => {
    const { states } = stateMachine;
    //@ts-ignore
    return states[state].on[event] || state;
  };

  const send = (event: string) => {
    const result = transition(currentState, event);
    setCurrentState(result);
  };

  return (
    <div onClick={() => send('CLICK')} id='app' className='app' data-state={currentState}>
      <UILoading />
      <NewEmails />
      <FullScreen />
    </div>
  );
}
