import {DELETE_WIDGET} from "../constants";
import React from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged}) => {
    let selectElement
    let inputElement
    return(
<div>
    <div hidden={preview}>
        <h2>Heading {widget.size}</h2>
    <input onChange={() => headingTextChanged(widget.id, inputElement.value)}
            ref={node => inputElement = node}
            value={widget.text}/>

    <select onChange={() => headingSizeChanged(widget.id, selectElement.value)}
                ref={node => selectElement = node}
            value={widget.size}>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
        </select>
    <h3>Preview</h3>
    </div>
    {widget.size==1&&<h1>{widget.text}</h1>}
    {widget.size==2&&<h2>{widget.text}</h2>}
    {widget.size==3&&<h3>{widget.text}</h3>}
</div>
    )}

const dispatcherToPropsMapper
    = dispatch => ({
    headingTextChanged: (widgetId, newSize) => actions.headingTextChanged(dispatch, widgetId, newSize),
    headingSizeChanged: (widgetId, newSize) => actions.headingSizeChanged(dispatch, widgetId, newSize)
})

const stateToPropsMapper = state => ({
    preview: state.preview
})


const HeadingContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(Heading)

const List = () => (
    <h2>List</h2>
)
const Image = () => (
    <h2>Image</h2>
)
const Paragraph = () => (
    <h2>Paragraph</h2>
)
const Link = () => (
    <h2>Link</h2>
)

const Widget = ({widget, preview, dispatch}) => {
    let selectElement
    return(
        <li key={widget.id}>
            <div hidden={preview}>
                {widget.id}{widget.widgetType}{widget.text}
    <select value={widget.widgetType} onChange={e => dispatch({
        type:'SELECT_WIDGET_TYPE',
        id:widget.id,
        widgetType: selectElement.value
    })} ref={node => selectElement=node}>
        <option>Heading</option>
        <option>Paragraph</option>
        <option>List</option>
        <option>Image</option>
        <option>Link</option>
    </select>

<button onClick={e => (
    dispatch({type: DELETE_WIDGET, id: widget.id})
)}>Delete widget</button>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph' && <Paragraph/>}
                {widget.widgetType==='List' && <List/>}
                {widget.widgetType==='Image' && <Image/>}
                {widget.widgetType==='Link' && <Link/>}
            </div>
        </li>)}

const stateToPropsMapperContainer = state => ({
    preview: state.preview
})
const WidgetContainer = connect(stateToPropsMapperContainer)(Widget)

export default WidgetContainer
