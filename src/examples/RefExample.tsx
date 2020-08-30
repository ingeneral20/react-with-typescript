import React, {Component, RefObject} from "react";

export default class RefExample extends Component {

    timeRef: RefObject<any>

    constructor(iProps: any) {
        super(iProps);
        this.timeRef = React.createRef();
        this.latestTimeButtonHandler = this.latestTimeButtonHandler.bind(this);
    }

    latestTimeButtonHandler(event: any) {
        event.preventDefault();
        this.timeRef.current.innerText = new Date().toUTCString();
    }

    render() {
        return (
            <div>
                <label ref={this.timeRef}>Current Time</label>
                <button onClick={this.latestTimeButtonHandler} >Latest Time</button>
            </div>
        );
    }
}