import {DELETE_WIDGET} from "../constants";
import React from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import HeadingContainer from './HeadingWidget'
import ImageContainer from './ImageWidget'
import ListContainer from './ListWidget'
import LinkContainer from './LinkWidget'
import ParagraphContainer from './ParagraphWidget'
const Paragraph = () => (
    <h2>Paragraph</h2>
)
const Link = () => (
    <h2>Link</h2>
)

const Widget = ({widget, preview, dispatch, widgetPos, widgetLength, googleImageUrls, moveUpward, moveDownward, deleteWidget, selectWidgetType}) => {
    let selectElement
    return(
        <li className="border" key={widget.id}>
            <div className="row cm-widget-div" hidden={preview}>

                <div className="col-sm-8"/>
                <div className="row col-sm-4 float-right">
                    <button hidden={widget.widgetPos==1}  className="btn btn-warning cm-up-down-btn"
                            onClick={() => moveUpward(widget.id, widget.widgetPos)}>
                        <i className="fa fa-arrow-up"></i></button>
                    <button hidden={widget.widgetPos==widgetLength} className="btn btn-warning cm-up-down-btn"
                            onClick={() => moveDownward(widget.id, widget.widgetPos)}>
                        <i className="fa fa-arrow-down"></i></button>
                    {/*{widget.id}{widget.widgetType}{widget.text}*/}
                    <select className="cm-up-down-btn" value={widget.widgetType}
                            ref={node => selectElement=node}
                        onChange={() => selectWidgetType(widget.id, selectElement.value)}>
                        <option>Heading</option>
                        <option>Paragraph</option>
                        <option>List</option>
                        <option>Image</option>
                        <option>Link</option>
                    </select>

                    <button className="btn btn-danger cm-up-down-btn"
                            onClick={() => deleteWidget(widget.id)}>
                        <i className="fa fa-times"/></button>
                </div>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget} preview={preview}/>}
                {widget.widgetType==='Paragraph' && <ParagraphContainer widget={widget} preview={preview}/>}
                {widget.widgetType==='List' && <ListContainer widget={widget} preview={preview}/>}
                {widget.widgetType==='Image' && <ImageContainer widget={widget} preview={preview} googleImageUrls={googleImageUrls}/>}
                {widget.widgetType==='Link' && <LinkContainer widget={widget} preview={preview}/>}
            </div>
        </li>)}

const stateToPropsMapperContainer = state => ({
    preview: state.preview
})

const dispatcherToPropsMapper = (dispatch) =>({
    moveUpward: (widgetId, widgetPos) => actions.moveUpward(dispatch, widgetId, widgetPos),
    moveDownward:(widgetId, widgetPos) => actions.moveDownward(dispatch, widgetId, widgetPos),
    deleteWidget:(widgetId) => actions.deleteWidget(dispatch, widgetId),
    selectWidgetType: (widgetId, widgetType) => actions.selectWidgetType(dispatch, widgetId, widgetType)
})

const WidgetContainer = connect(stateToPropsMapperContainer, dispatcherToPropsMapper)(Widget)

export default WidgetContainer
