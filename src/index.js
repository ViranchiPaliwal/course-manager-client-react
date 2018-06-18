import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App  from './containers/WidgetList'

import {createStore} from "redux";
import {widgetReducer} from "./reducers/widgetReducers";
import {Provider} from "react-redux";

let store = createStore(widgetReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
