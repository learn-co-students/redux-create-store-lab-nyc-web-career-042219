// import candyReducer from './reducers/candyReducer.js'
// import countReducer from './reducers/countReducer.js'
// import { create } from 'domain';

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
 
  function getState() {
    return state;
  };
  
  dispatch({ type: '@@INIT' })

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}



// let storeCandy = createStore(candyReducer);
// let storeCount = createStore(countReducer);

// reducer(undefined, { type: 'INIT' })

//this breaks the tests
// storeCandy.dispatch({ type: '@@INIT' });