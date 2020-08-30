import React, {Component} from "react";
import "../styles/Users.css";

export default class HttpExample extends Component<any, any> {

    render() {
        return (
            <UsersComponent/>
        );
    }
}

type User = {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
};

type UsersComponentState = {
    users: User[];
}


class UsersComponent extends Component<any, UsersComponentState> {

    private url = "http://jsonplaceholder.typicode.com/users";

    constructor(iProps: any) {
        super(iProps);
        this.state = {users: [{id: 100, name: "Robert", username: "rob123", email: "rob1234@mymail.com"}]};
        this.getUsers = this.getUsers.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
    }

    render() {
        return (
            <div className="background-style">
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Username</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(this.printUser)}
                    </tbody>
                </table>
                <button style={{color: "red", fontSize: 50}} onClick={this.getUsers}>Load Users</button>
                <button style={{color: "blue"}} onClick={this.clearUsers}>Clear</button>
            </div>
            
        );
    }

    clearUsers() {
        this.setState({users: []});
    }

    getUsers() {
        fetch(this.url, {
            method: "GET"
        }).then(response => {
            response.json().then((newUsers: User[]) => {
                this.setState({users: newUsers});
            })
        })
    }

    printUser(user: User) {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
            </tr>
        );
    }

    
}

