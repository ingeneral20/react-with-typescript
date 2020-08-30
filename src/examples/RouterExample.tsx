import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, RouteComponentProps} from "react-router-dom";

export default class RouterExample extends Component {

    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/a/100" >Route A</Link>
                    </li>
                    <li>
                        <Link to="/b/200" >Route B</Link>
                    </li>
                    <li>
                        <Link to="/query?p1=20&p2=50" >Route Query Params</Link>
                    </li>
                </ul>

                <Route path="/" exact component={HomePage}></Route>
                <Route path="/a/:n1" exact component={RouteA}></Route>
                <Route path="/b/:n2" exact component={RouteB}></Route>
                <Route path="/query" exact component={QueryParamsExample}></Route>
            </Router>           

        );
    }
}

class HomePage extends Component{

    render() {
        return (
            <div>Welcome to Home page: {new Date().toUTCString()}</div>
        );
    }
}

class RouteA extends Component<RouteComponentProps<any>, any> {

    render() {
        return <div>This Route A : {this.props.match.params.n1}</div>;
    }
}

function RouteB (props: RouteComponentProps<any>) {    
    return <div>This Route B : {props.match.params.n2}</div>;   
}

class QueryParamsExample extends Component<RouteComponentProps<any>> {

    render () {
        const query = new URLSearchParams(this.props.location.search);
        return <div>Query params p1: {query.get("p1")}, p2: {query.get("p2")}</div>
    }
}