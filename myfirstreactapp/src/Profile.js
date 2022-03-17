import React, { Component } from "react";

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskList: ['coding', 'thinking', 'in a meeting'],
            isActive: false
        };
    }
    
    render(){
        
        return (
            <p>
                My job is {this.props.workTitle}<br/>
                <span>ToDos for Today: {this.state.taskList.map((d) => {return d + ", "})}</span><br />
                <span>{this.state.isActive ? "I am an active employee": "No longer working here"}</span><br />
            </p>
        );
    }
}