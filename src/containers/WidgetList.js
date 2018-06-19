import React, {Component} from 'react'
import {connect} from 'react-redux'
import WidgetContainer from '../components/Widget';
import ToggleButton from 'react-toggle-button'
import * as actions from '../actions';
import WidgetListStyle from '../css/WidgetList.css'
import {DELETE_WIDGET} from "../constants";

class WidgetList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cm-widget-list">
                <div className="row">
                    <div className="col-9"/>

                    <div className="row col-3 float-right">
                        <button className="btn btn-success" hidden={this.props.previewMode}
                                onClick={() => {
                                    this.props.save(this.props.topicId)
                                }}>
                            Save
                        </button>
                        <b className="cm-preview">Preview</b>
                        <ToggleButton onClick={() => {
                            this.props.preview(this.props.topicId)
                        }}
                                      value={this.props.previewMode}/>
                    </div>
                </div>
                <ul className="cm-widget-ul">
                    {this.props.widgets.map(widget =>
                        (<WidgetContainer
                            widget={widget}
                            key={widget.id}
                            preview={this.props.previewMode}
                            googleImageUrls={this.props.googleImageUrls}
                            widgetLength={this.props.widgets.length}/>))}
                </ul>
                <button hidden={this.props.previewMode} className="btn btn-primary float-right"
                        onClick={this.props.addWidget}>
                    <i className="fa fa-plus"/></button>
            </div>
        )
    }

    componentWillReceiveProps(newProps) {
        if (newProps.topicId !== this.props.topicId) {
            this.props.findAllWidgets(newProps.topicId);
        }
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