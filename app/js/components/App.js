import React from "react";
import Lifecycle from "./Lifecycle";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            hello: "Hi"
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hello: "Hello"});
        }, 5000);
    }

    componentWillUnmount() {
        setTimeout(() => {
            this.setState({hello: "Hello"});
            console.log("componentWillUnmount");
        }, 5000);
    }

    render() {

        return (
            <div className="app container">
                {this.state.hello !== "Hello" && <Lifecycle hello={this.state.hello}/>}
            </div>
        );
    }
}
