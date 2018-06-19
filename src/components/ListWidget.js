import React from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";

const List = ({widget, preview, listType, listContent, widgetNameChanged, listContentChanged, listTypeChanged}) => {
    let selectElement
    let inputElement
    let nameElement
    return(
        <div>
            <div className='cm-widget-heading' hidden={preview}>
                <h2 >{widget.widgetType}</h2>
                <div className='form-group'>
                <textarea className='form-control cm-heading-form-control' type='text' placeholder='Put items in different lines'
                       ref={node => inputElement = node}
                          onChange={() => listContentChanged(widget.id, inputElement.value)}
                          value={widget.listContent}/>

                <select className='form-control cm-heading-form-control'
                        ref={node => selectElement = node}
                        onChange={() => listTypeChanged(widget.id, selectElement.value)}
                        value={widget.listType}>
                    <option >Unordered List</option>
                    <option >Ordered List</option>
                </select>
                    <input className="form-control cm-heading-form-control" type="text" placeholder="Widget Name"
                           onChange={() => widgetNameChanged(widget.id, nameElement.value)}
                           ref={node => nameElement=node}
                           value={widget.widgetName}/>

                    <h3>Preview</h3>
            </div>
            {widget.listType==="Unordered List"&&<ul><ChildComponent childElements={widget.listContent}/></ul>}
            {widget.listType==="Ordered List"&&<ol><ChildComponent childElements={widget.listContent}/></ol>}
        </div>
        </div>
    )}


const dispatcherToPropsMapper
    = dispatch => ({
    listContentChanged: (widgetId, newContent) => actions.listContentChanged(dispatch, widgetId, newContent),
    listTypeChanged: (widgetId, newType) => actions.listTypeChanged(dispatch, widgetId, newType),
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

const ListContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(List)

export default ListContainer