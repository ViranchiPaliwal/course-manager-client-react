import React from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";

const Link = ({widget, preview, linkContent, linkUrl, widgetNameChanged, linkUrlChanged, linkContentChanged}) => {
    let urlElement
    let inputElement
    let nameElement
    return(
        <div>
            <div className='cm-widget-heading' hidden={preview}>
                <h2 >{widget.widgetType}</h2>
                <div className='form-group'>
                <input className='form-control cm-heading-form-control' type='text' placeholder='Insert link'
                       onChange={() => linkUrlChanged(widget.id, inputElement.value)}
                       ref={node => inputElement = node}
                       value={widget.linkUrl}/>
                    <input className='form-control cm-heading-form-control' type='text' placeholder='Link description'
                           onChange={() => linkContentChanged(widget.id, urlElement.value)}
                           ref={node => urlElement = node}
                           value={widget.linkContent}/>
                    <input className="form-control cm-heading-form-control" type="text" placeholder="Widget Name"
                           onChange={() => widgetNameChanged(widget.id, nameElement.value)}
                           ref={node => nameElement=node}
                           value={widget.widgetName}/>

                    <h3>Preview</h3>
            </div>
                <a className="cm-widget-preview" href={widget.linkUrl}>{widget.linkContent}</a>
        </div>
        </div>
    )}


const dispatcherToPropsMapper
    = dispatch => ({
    linkUrlChanged: (widgetId, newUrl) => actions.linkUrlChanged(dispatch, widgetId, newUrl),
    linkContentChanged: (widgetId, newContent) => actions.linkContentChanged(dispatch, widgetId, newContent),
    widgetNameChanged: (widgetId, newName) => actions.widgetNameChanged(dispatch, widgetId, newName)

})

const stateToPropsMapper = state => ({
    preview: state.preview
})


const LinkContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(Link)

export default LinkContainer