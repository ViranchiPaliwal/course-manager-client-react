import {DELETE_WIDGET} from "../constants";
import React from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import HeadingContainer from './HeadingWidget'
import ImageContainer from './ImageWidget'
import ListContainer from './ListWidget'
import LinkContainer from './LinkWidget'

const Paragraph = () => (
    <h2>Paragraph</h2>
)
const Link = () => (
    <h2>Link</h2>
)

const Widget = ({widget, preview, dispatch, googleImageUrls}) => {
    let selectElement
    return(
        <li className="border" key={widget.id}>
            <div className="row" hidden={preview}>

                <div className="col-sm-8"/>
                <div className="row col-sm-4 float-right">
                    <button className="btn btn-warning cm-up-down-btn"  >
                        <i className="fa fa-arrow-up"></i></button>
                    <button className="btn btn-warning cm-up-down-btn" >
                        <i className="fa fa-arrow-down"></i></button>
                {/*{widget.id}{widget.widgetType}{widget.text}*/}
    <select className="cm-up-down-btn" value={widget.widgetType} onChange={e => dispatch({
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

<button className="btn btn-danger cm-up-down-btn" onClick={e => (
    dispatch({type: DELETE_WIDGET, id: widget.id})
)}><i className="fa fa-times"/></button>
                </div>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget} preview={preview}/>}
                {widget.widgetType==='Paragraph' && <Paragraph/>}
                {widget.widgetType==='List' && <ListContainer widget={widget} preview={preview}/>}
                {widget.widgetType==='Image' && <ImageContainer widget={widget} preview={preview} googleImageUrls={googleImageUrls}/>}
                {widget.widgetType==='Link' && <LinkContainer widget={widget} preview={preview}/>}
            </div>
        </li>)}

const stateToPropsMapperContainer = state => ({
    preview: state.preview
})
const WidgetContainer = connect(stateToPropsMapperContainer)(Widget)

export default WidgetContainer
