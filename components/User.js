import React, { Component } from 'react';

export default class User extends Component {
    constructor(props){
        super(props)
        const {age, stupid} = this.props.user
        this.state = {
            age,
            stupid
        }
    }
    handleAgeChange(e){
        let {value} = e.target
        this.setState({
            age: value
        });
    }
    handleStupid(){
        this.setState({
            stupid: !this.state.stupid 
        });
    }
    render() {
        const {age, stupid} = this.state
        const {id, name, sex} = this.props.user
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{sex}</td>
                <td>{age}</td>
                <td>{stupid ? "逗逼" : "正常"}</td>
                <td>
                    <input type="text" onChange={this.handleAgeChange.bind(this)}/>
                    <button onClick={this.handleStupid.bind(this)}>逗逼？</button>
                </td>
            </tr>
        );
    }
}
