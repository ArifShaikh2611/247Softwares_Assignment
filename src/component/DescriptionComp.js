import React, { Component } from 'react';

const textAreaStyle = {
    display : "block",
    margin : "20px",
    width : "70%",
    height : "60px"
}
class DescriptionComp extends Component{
    render(){
        return(
            <div>
                <label>Description</label>
                <textarea style={textAreaStyle}></textarea>
                </div>
        )
    }
}

export default DescriptionComp;