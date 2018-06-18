import React, {Component} from 'react'
import {connect} from 'react-redux'
import WidgetContainer from '../components/Widget';
import {findAllWidgets, addWidget, save} from '../actions';


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

export default App