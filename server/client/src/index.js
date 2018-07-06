import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';





const store = createStore(reducers, {}, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

store.subscribe(() => {
    console.log(store.getState(), 'store changed')
})

ReactDOM.render(

    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')

);