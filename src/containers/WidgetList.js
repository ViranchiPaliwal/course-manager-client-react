import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'

const Widget = ({widget}) => (
    <li key={widget.id}>{widget.text}
        <button onClick={}></button></li>
)

const WidgetList = ({widgets, dispatch}) => (
    <div>
        <h1>Widget List  {widgets.length}</h1>
        <ul>
            {widgets.map(widget => (<Widget widget={widget}/>))}
        </ul>
        <button onClick={e => (
            dispatch({type: 'ADD_WIDGET'})
        )}>Add widget</button>
    </div>
)
let initialState = {
    widgets: [
        {id: 0, text: "Widget 1"},
        {id: 1, text: "Widget 2"},
        {id: 2, text: "Widget 3"},
        {id: 3, text: "Widget 4"},
        {id: 4, text: "Widget 5"}
    ]
}

const widgetReducer = (state = initialState, action) =>{
    switch (action.type){

        case 'ADD_WIDGET':
            return {
                widgets:[
                    ...state.widgets,
                    {id: 99, text: 'New Widget'}
                ]
            }
        default:
            return state
    }
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

