import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'

const WidgetList = ({widgets}) => (
    <div>
        <h1>Widget List  {widgets.length}</h1>
    </div>
)
let initialState = {
    widgets: [
        {id: 0, text: "Widget 1"},
        {id: 0, text: "Widget 2"},
        {id: 0, text: "Widget 3"},
        {id: 0, text: "Widget 4"},
        {id: 0, text: "Widget 5"}
    ]
}

const widgetReducer = () =>{
    return initialState
}

let store = createStore(widgetReducer)

const stateToPropertyMapper = state => ({
    widgets:state.widgets
})
const App = connect(stateToPropertyMapper)(WidgetList)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)