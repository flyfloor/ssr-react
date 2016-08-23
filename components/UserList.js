import React, { Component } from 'react';
import User from './User';
import {Pagination} from 'react-ui-component';
import allCss from 'react-ui-component/css/all.less';

export default class UserList extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [{
                id: 1,
                name: 'jerry',
                sex: 'male',
                age: 18,
                stupid: false,
            }, {
                id: 2,
                name: 'marryxxx',
                sex: 'female',
                age: 20,
                stupid: false,
            }]
        }
    }
    handlePagination(page){
        console.log(page)
    }
    render() {
        const {users} = this.state
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>逗逼</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => <User key={user.id} user={user}/>)}
                    </tbody>
                </table>
                <Pagination current={2} onChange={this.handlePagination.bind(this)}></Pagination>
            </div>
        );
    }
}
