import React from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";

const Image = ({widget, preview, imageLink, imageUrlChanged, widgetNameChanged, queryChanged, googleImageUrls}) => {
    let imageElement
    let nameElement
    let queryElement
    return(
        <div>
            <div className='cm-widget-heading' hidden={preview}>
                <h2 >{widget.widgetType}</h2>
                <div className='form-group'>
                <input className='form-control cm-heading-form-control' type='text' placeholder='Image Url'
                       onChange={() => imageUrlChanged(widget.id, imageElement.value)}
                       ref={node => imageElement = node}
                       value={widget.imageLink}/>

                    <input className="form-control cm-heading-form-control" type="text" placeholder="Widget Name"
                           onChange={() => widgetNameChanged(widget.id, nameElement.value)}
                           ref={node => nameElement=node}
                           value={widget.widgetName}/>
                    <div className="input-group mb-3">
                        <input type="text"
                               ref={node => queryElement = node}
                               placeholder="Google Search" className="form-control"/>
                        <div className="input-group-append">
                            <button onClick={() => queryChanged(queryElement.value)}
                                    className="cm-add-button btn btn-primary float-right">
                                <i className="cm-add-icon fa fa-lg fa-plus"></i></button>
                        </div>
                    </div>
                        {!!googleImageUrls&&googleImageUrls.map(url => (
                            <img src={url} className='cm-widget-image'
                            onClick={() => imageUrlChanged(widget.id, url)}/>
                        ))}
                    <h3>Preview</h3>
            </div>
            </div>
            <div className="cm-widget-preview">
                    {<img src={widget.imageLink} className='cm-widget-image'/>}
            </div>
        </div>
    )}


const dispatcherToPropsMapper
    = dispatch => ({
    imageUrlChanged: (widgetId, newUrl) => actions.imageUrlChanged(dispatch, widgetId, newUrl),
    widgetNameChanged: (widgetId, newName) => actions.widgetNameChanged(dispatch, widgetId, newName),
    queryChanged: (query) => actions.queryChanged(dispatch, query)
})

const stateToPropsMapper = state => ({
    preview: state.preview
})


const ImageContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(Image)

export default ImageContainer