import React, {Component} from 'react'
import {connect} from 'react-redux'
import WidgetContainer from '../components/Widget';
import * as actions from '../actions';


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
                <button hidden={this.props.previewMode} onClick={this.props.save}>
                    Save
                </button>
                <button onClick={this.props.preview}>
                    Preview
                </button>
                <ul>
                    {this.props.widgets.map(widget =>
                        (<WidgetContainer
                            widget={widget}
                            key={widget.id}
                            preview={this.props.previewMode}/>))}
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
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    addWidget: () => actions.addWidget(dispatch),
    save: () => actions.save(dispatch),
    preview: () => actions.preview(dispatch)

})

const stateToPropertyMapper = state => ({
    widgets:state.widgets,
    previewMode:state.preview
})


const Widget = connect(stateToPropertyMapper, dispatcherToPropsMapper)(WidgetList)

export default Widget