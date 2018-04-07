import React, { Component } from 'react';

const flStyle ={
  marginLeft : "10px"
}

const h3Style ={
    display : "inline-block"
}

class HeaderText extends Component {
    state ={
        textName : "Demo",
        buttonText : "Edit",
        showText : true
    }

    componentWillMount = () =>{
        this.setState({...this.setState,textName:this.props.initialName});
    }

    setTextName = (e) => {
        this.setState({...this.setState,textName:e.target.value});
    }

    toggleDisplay = () =>{
        if(this.state.showText)
        this.setState({...this.setState,showText:false,buttonText:"Save"});
        else
        this.setState({...this.setState,showText:true,buttonText:"Edit"});
    }
    render(){
        return (
            <div>
                { 
                    this.state.showText ?  <h3 style={h3Style}>{this.state.textName}</h3> :  <input type="text" value={this.state.textName} onChange={this.setTextName}/>
                    }
       
        <button style={flStyle} onClick={this.toggleDisplay}>{this.state.buttonText}</button>
        </div>
        )
    }
}


export default HeaderText;