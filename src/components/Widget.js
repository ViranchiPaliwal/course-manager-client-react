import {DELETE_WIDGET} from "../constants";
import React from 'react'
import {connect} from 'react-redux'

const Widget = ({widget, dispatch}) => (
    <li key={widget.id}>{widget.id}{widget.text}
        <button onClick={e => (
            dispatch({type: DELETE_WIDGET, id: widget.id})
        )}>Delete widget</button></li>
)

const WidgetContainer = connect()(Widget)

export default WidgetContainer
