import { createStore } from 'redux';

export type TState = {
  count: number
}

type TAction = {
  type: string,
  value?: number
}

const initialState: TState = {
  count: 0,
};

function reducer(state: TState = initialState, action:TAction): any {
  switch (action.type) {
    case 'PLUS':
      return state = {
        ...state,
        count: state.count + 1
      };
    case 'MINUS':
      return state = {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  (<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__());

export default store;
