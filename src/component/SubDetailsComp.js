import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { cardTarget, cardSource } from './dragUtils';

const divStyle = {
    border : "dotted 1px black",
    display: "inline-block",
    padding : "10px",
    marginRight : "15px",
    position: 'relative'
}

const buttonStyle ={
    float : "right",
    margin : "0 5px"
}

const  inputStyle ={
    display:"block",
    marginTop :"10px",
    width:"160px"
}

const aStyle={
    float:"right"
}

const marT = {
    margin:"10px 0"
}

class SubDetailsComp extends Component{
    constructor(props){
        super(props);
        this.state= {
            showPopup : false,
            showAddPopup: false,
            isVisible : true,
            inputValue : "",
            modalLable : "",
            labelTile : "",
            optionArray : ['option1','option2','option3','option4'],
            displayType : "showDetail",
            addModalLable : "Enter Title",
            whichElement : "dropdown"
        }
    }


    componentWillMount = () =>{
        this.setState({...this.state,labelTile:this.props.labelName,displayType:this.props.displayType})
    }

    openPopup = () => {

        this.setState({...this.state,showPopup:true,modalLable:this.state.labelTile})
    }
    
    openAddPopup = () =>{
        this.setState({...this.state,showAddPopup:true})
    }

    closePopup = () =>{
        this.setState({...this.state,showPopup:false,labelTile:this.state.modalLable})
    }

    setInputValue = (e) => {
        this.setState({...this.state,inputValue:e.target.value})
    }

    updateLabel = (e) => {
        this.setState({...this.state,modalLable:e.target.value})
        
    }

    closeAddPopup = () => {
        this.setState({...this.state,showAddPopup:false,displayType:"showDetail",labelTile:this.state.addModalLable})
    }

    updateAddLabel = (e) =>{
        this.setState({...this.state,addModalLable:e.target.value})
    }

    deleteDiv = () => {
        this.setState({...this.state,isVisible:false})
    }
    // removeOption = (val) => {
    //     let tempOption = ...this.state.optionArray
    // }

    changeAddElement = (e) =>{
        this.setState({...this.state,whichElement:e.target.value})
    }
    render(){
        if(!this.state.isVisible)
        return (null);

        const opacity = { opacity: this.props.isDragging ? 0 : 1 }

        const content = (
            <div style={{ ...divStyle, ...opacity }}>

              { this.state.displayType === "showDetail" ? <div> <label>{this.state.labelTile}</label>
              <button style={buttonStyle} onClick={this.deleteDiv}>X</button>
                <button style={buttonStyle} onClick={this.openPopup}>Edit</button>
               
                {   
                    this.state.whichElement === "dropdown" ? <select style={inputStyle} type="text" onChange={this.setInputValue} value={this.state.inputValue}>
                    {
                        this.state.optionArray.map((value,i) => <option  key={i}>{value}</option>)
                        }
                    </select> : <input style={inputStyle}/>
                    }
                
                {this.state.showPopup && (
                    <dialog open >
                    <button style={aStyle} title='Save' onClick={this.closePopup}>Save</button><br/>
                    <input class="not-draggable" value={this.state.modalLable} style={marT} type="text" onChange={this.updateLabel.bind(this)}/>
                        
                        {
                           this.state.optionArray.map((value,i) => 
                           {
                               return(
                               <li key={i}>{value} <a onClick={() =>{this.removeOption(i)}}>X</a></li>
                               
                            )
                           
                        }
                        )  
                        }
                    </dialog>
                )}
                </div> : <div>
                        <button onClick={this.openAddPopup}>+ Add Element</button>
                        {this.state.showAddPopup && (
                    <dialog open >
                    <button style={aStyle} title='Save' onClick={this.closeAddPopup}>Save</button> <br/>
                     <input style={marT} value={this.state.addModalLable} type="text" onChange={this.updateAddLabel} />
                            <br/>
                        <input type="radio" name="detailType" value="input" onChange={this.changeAddElement}/>Input <br/>
                        <input type="radio" name="detailType" value="dropdown" onChange={this.changeAddElement}/>Drop Down <br/>
                        
                    </dialog>
                )}
                </div>
            }
              
                </div>
            
        )
		return this.props.connectDragSource(
			this.props.connectDropTarget(content),
        )        
    }
}

const target = DropTarget("detailsCard", cardTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}))(SubDetailsComp)

export default DragSource("detailsCard", cardSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))(target)
