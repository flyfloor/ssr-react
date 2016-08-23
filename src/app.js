import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserList from '../components/UserList';

export class App extends Component {
    render() {
        return (
            <div>
                <UserList></UserList>
            </div>
        );
    }
}



ReactDOM.render(<App/>, document.getElementById('root'))
