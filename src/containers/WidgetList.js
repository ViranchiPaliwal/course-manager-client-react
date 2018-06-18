import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'

const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: 'FIND_ALL_WIDGETS',
            widgets: widgets }))
}

const addWidget = dispatch =>{
    dispatch({type: 'ADD_WIDGET'})
}

const Widget = ({widget, dispatch}) => (
    <li key={widget.id}>{widget.id}{widget.text}
        <button onClick={e => (
            dispatch({type: 'DELETE_WIDGET', id: widget.id})
        )}>Delete widget</button></li>
)

const save = dispatch => {
    dispatch({type: 'SAVE_ITEMS'})
}


const WidgetContainer = connect()(Widget)
class WidgetList extends Component {
    constructor(props) {
        super(props)
        this.props.findAllWidgets()
    }

    render() {
        return (
            //({widgets, dispatch})
            <div>
                <h1>Widget List {this.props.widgets.length}</h1>
                <button onClick={this.props.save}>
                    Save
                </button>
                <ul>
                    {this.props.widgets.map(widget => (<WidgetContainer widget={widget}/>))}
                </ul>
                <button onClick={this.props.addWidget}
                >Add widget
                </button>
            </div>
        )
    }
}
let initialState = {
    widgets: [
        {id: 0, text: "Widget 1"},
        {id: 1, text: "Widget 2"},
        {id: 2, text: "Widget 3"},
        {id: 3, text: "Widget 4"},
        {id: 4, text: "Widget 5"}
    ]
}

const widgetReducer = (state = {widgets: []}, action) =>{
    switch (action.type){
        case 'FIND_ALL_WIDGETS':
            return {
                widgets: action.widgets
            }
        case 'DELETE_WIDGET':
            return {
                widgets:state.widgets.filter(widget => (
                    widget.id != action.id
                ))}
        case 'ADD_WIDGET':
            return {
                widgets:[
                    ...state.widgets,
                    {id: state.widgets.length + 2, text: 'New Widget'}
                ]
            }
        case 'SAVE_ITEMS':
            fetch('http://localhost:8080/api/widget/save', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            })
        default:
            return state
    }
}

let store = createStore(widgetReducer)

const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgets: () => findAllWidgets(dispatch),
    addWidget: () => addWidget(dispatch),
    save: () => save(dispatch)
})

const stateToPropertyMapper = state => ({
    widgets:state.widgets
})
const App = connect(stateToPropertyMapper, dispatcherToPropsMapper)(WidgetList)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

