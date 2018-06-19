import React from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, widgetNameChanged}) => {
    let selectElement
    let inputElement
    let nameElement
    return(
        <div>
            <div className='cm-widget-heading' hidden={preview}>
                <h2 >{widget.widgetType}</h2>
                <div className='form-group'>
                <input className='form-control cm-heading-form-control' type='text' placeholder='Heading Text'
                       onChange={() => headingTextChanged(widget.id, inputElement.value)}
                       ref={node => inputElement = node}
                       value={widget.text}/>

                <select className='form-control cm-heading-form-control'
                        onChange={() => headingSizeChanged(widget.id, selectElement.value)}
                        ref={node => selectElement = node}
                        value={widget.size}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                    <input className="form-control cm-heading-form-control" type="text" placeholder="Widget Name"
                           onChange={() => widgetNameChanged(widget.id, nameElement.value)}
                           ref={node => nameElement=node}
                           value={widget.widgetName}/>

                    <h3>Preview</h3>
            </div>
            {widget.size==1&&<h1>{widget.text}</h1>}
            {widget.size==2&&<h2>{widget.text}</h2>}
            {widget.size==3&&<h3>{widget.text}</h3>}
        </div>
        </div>
    )}


const dispatcherToPropsMapper
    = dispatch => ({
    headingTextChanged: (widgetId, newSize) => actions.headingTextChanged(dispatch, widgetId, newSize),
    headingSizeChanged: (widgetId, newSize) => actions.headingSizeChanged(dispatch, widgetId, newSize),
    widgetNameChanged: (widgetId, newName) => actions.widgetNameChanged(dispatch, widgetId, newName)

})

const stateToPropsMapper = state => ({
    preview: state.preview
})


const HeadingContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(Heading)

export default HeadingContainer