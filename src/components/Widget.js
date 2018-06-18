import {DELETE_WIDGET} from "../constants";
import React from 'react'
import {connect} from 'react-redux'

const Heading = () => (
    <h2>Heading</h2>
)
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

const Widget = ({widget, dispatch}) => {
    let selectElement
    return(
        <li key={widget.id}>{widget.id}{widget.widgetType}{widget.text}
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
            <div>
                {widget.widgetType==='Heading' && <Heading/>}
                {widget.widgetType==='Paragraph' && <Paragraph/>}
                {widget.widgetType==='List' && <List/>}
                {widget.widgetType==='Image' && <Image/>}
                {widget.widgetType==='Link' && <Link/>}
            </div>
        </li>)}

const WidgetContainer = connect()(Widget)

export default WidgetContainer
