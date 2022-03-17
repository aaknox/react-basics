import React, { Component } from "react";

export default class Reminder extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEmployeeOfTheMonth: true
        };
        this.sendReminder = this.sendReminder.bind(this);
    }

    sendReminder(e){
        e.preventDefault();
        this.setState(prevState => ({
            isEmployeeOfTheMonth: !prevState.isEmployeeOfTheMonth
        }));
        alert("You should be in a meeting!");
    }

    render(){
        return (<button onClick={this.sendReminder}> Click Me! EOM: {this.state.isEmployeeOfTheMonth ? "Yes": "No"}</button>);
    }
}