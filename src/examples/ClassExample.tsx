import React, {Component} from "react";

type ClassExampleState = {
    initialValue: number;
}

export default class ClassExample extends Component<any, ClassExampleState>{

    constructor(iProps: any) {
        super(iProps);
        this.state = {
            initialValue: 20
        };
        this.reinitializeHandler = this.reinitializeHandler.bind(this);
    }

    reinitializeHandler() {
        this.setState(state => {
            return {initialValue: state.initialValue + 5}
        });
    }

    render() {
        return (
            <div>
                <div><Counter val={this.state.initialValue}/></div>
                <div><button onClick={this.reinitializeHandler} >Reinitialize</button></div>
            </div>            
        );
    }
}

type CounterProps = {
    val: number;
}

type CounterState = {
    stateVal: number;
}

class Counter extends Component<CounterProps, CounterState> {

    constructor(iProps: CounterProps) {
        super(iProps);
        this.state = {
            stateVal : this.props.val
        };
        this.doIncrement = this.doIncrement.bind(this);
    }

    componentDidMount(){
        console.log("Component Did Mount called");
    }

    componentDidUpdate(prevProps: CounterProps){
        console.log("Component Did Update called");
        console.log("Previous initial value: ", prevProps.val);
        console.log("Current initial value: ", this.props.val);
        if (this.props.val !== prevProps.val) {
            this.setState(state => {
                return {
                    stateVal: this.props.val
                }
            });
        }
    }

    shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState){ 
        if (this.state.stateVal !== nextProps.val)       {
            console.log("Should component updated called - true");
            return true;        
        } else {
            console.log("Should component updated called - false");
            return false;        
        }
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    doIncrement() {
        this.setState(state => {
            return {stateVal: state.stateVal + 1}
        });
    }

    render() {
        console.log("Render called");
        return (
            <div>
                <label>{this.state.stateVal}  </label>
                <button onClick={this.doIncrement}>Increment</button>
            </div>
        );
    }
}