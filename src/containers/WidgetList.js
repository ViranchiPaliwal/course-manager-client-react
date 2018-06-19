import React, {Component} from 'react'
import {connect} from 'react-redux'
import WidgetContainer from '../components/Widget';
import ToggleButton from 'react-toggle-button'
import * as actions from '../actions';
import WidgetListStyle from '../css/WidgetList.css'

class WidgetList extends Component {
    constructor(props) {
        super(props)
        this.props.findAllWidgets()
    }

    render() {
        return (
            <div className="cm-widget-list">
                <div className="row">
                <div className="col-9"/>

                <div className="row col-3 float-right" >
                    <button className="btn btn-success" hidden={this.props.previewMode}
                            onClick={() => {this.props.save(this.props.topicId)}}>
                        Save
                    </button>
                    <b className="cm-preview">Preview</b>
                    <ToggleButton  onClick={() => {this.props.preview(this.props.topicId)}}
                                   value={this.props.previewMode}/>
                </div>
                </div>
                <ul className="cm-widget-ul">
                    {this.props.widgets.map(widget =>
                        (<WidgetContainer
                            widget={widget}
                            key={widget.id}
                            preview={this.props.previewMode}
                            googleImageUrls={this.props.googleImageUrls}/>))}
                </ul>
                <button onClick={this.props.addWidget}
                >Add widget
                </button>
            </div>
        )
    }

    componentWillReceiveProps(newProps){
        this.props.findAllWidgets(newProps.topicId);
    }
}

const dispatcherToPropsMapper
    = dispatch => ({
    addWidget: () => actions.addWidget(dispatch),
    save: (topicId) => actions.save(dispatch, topicId),
    preview: (topicId) => actions.preview(dispatch, topicId),
    findAllWidgets: (topicId) => actions.findAllWidgets(dispatch, topicId)

})

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    previewMode: state.preview,
    googleImageUrls: state.googleImageUrls
})


const Widget = connect(stateToPropertyMapper, dispatcherToPropsMapper)(WidgetList)

export default Widget