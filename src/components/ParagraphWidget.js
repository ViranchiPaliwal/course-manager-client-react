import React from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";

const Paragraph = ({widget, preview, paraContent, widgetNameChanged, paraContentChanged}) => {
    let inputElement
    let nameElement
    return(
        <div>
            <div className='cm-widget-heading' hidden={preview}>
                <h2 >{widget.widgetType}</h2>
                <div className='form-group'>
                <textarea className='form-control cm-heading-form-control' type='text' placeholder='Put items in different lines'
                       ref={node => inputElement = node}
                          onChange={() => paraContentChanged(widget.id, inputElement.value)}
                          value={widget.paraContent}/>

                    <input className="form-control cm-heading-form-control" type="text" placeholder="Widget Name"
                           onChange={() => widgetNameChanged(widget.id, nameElement.value)}
                           ref={node => nameElement=node}
                           value={widget.widgetName}/>

                    <h3>Preview</h3>
            </div>
        </div>
            <p className="cm-widget-preview">{widget.paraContent}</p>
        </div>
    )}


const dispatcherToPropsMapper
    = dispatch => ({
    paraContentChanged: (widgetId, newContent) => actions.paraContentChanged(dispatch, widgetId, newContent),
    widgetNameChanged: (widgetId, newName) => actions.widgetNameChanged(dispatch, widgetId, newName)

})

const stateToPropsMapper = state => ({
    preview: state.preview
})

const ChildComponent = ({childElements}) => {
    if(typeof childElements != 'undefined'){
    let counter = 0
    return childElements.split('\n').map(element => (<li key={counter++}>{element}</li>))}
    else{
        return "";
    }
}

const ParagraphContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(Paragraph)

export default ParagraphContainer