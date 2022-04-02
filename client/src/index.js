// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';



// ReactDOM.render(

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,

//   document.getElementById('root')
// );
import React from "react";
import ReactDOM from "react-dom";

import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducer from './reducers';
import App from "./components/App";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);