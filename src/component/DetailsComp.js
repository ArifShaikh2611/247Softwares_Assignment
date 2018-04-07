import React, { Component } from 'react';
import SubDetailsComp from './SubDetailsComp';


const divStyle= {
    margin : "20px"
}
class DetailsComp extends Component{

    render(){
        return(
            <div style={divStyle}>
                <SubDetailsComp labelName="Event" displayType="showDetail"/>
                <SubDetailsComp labelName="Event Maker" displayType="showDetail"/>
                <SubDetailsComp labelName="Priority" displayType="showDetail"/>
                <SubDetailsComp labelName="Add" displayType="addDetail"/>
            </div>
        )
    }
}

export default DetailsComp;