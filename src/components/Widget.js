import {DELETE_WIDGET} from "../constants";
import React from 'react'
import {connect} from 'react-redux'

const Widget = ({widget, dispatch}) => {
    let selectElement
    return(
        <li key={widget.id}>{widget.id}{widget.widgetType}{widget.text}
    <select onChange={e => dispatch({
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
)}>Delete widget</button></li>)
}

const WidgetContainer = connect()(Widget)

export default WidgetContainer
