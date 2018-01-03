import { createStore } from 'redux'

function counter(state = { counter : 0}, action) {
  
  let newState = { ...state };
  switch (action.type) {
  case 'INCREMENT':
    newState.counter= state.counter + 1;
    break;
  case 'DECREMENT':
  newState.counter = state.counter - 1;
    break;
  default:
    break;
  }
  return newState
}

export let store = createStore(counter)