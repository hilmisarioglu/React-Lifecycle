import React, { Component } from 'react'
import "./CounterStyle.css";
export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Ali",
            count: 0,

        };
        console.log("constructor")
    };
    increase =()=>{
        this.setState({count:this.state.count+1})
    }
    decrease =()=>{
        this.setState({count:this.state.count-1})
    }
    reset =()=>{
        this.setState({count:0})
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps",props, state)
        return null;
    };
    shouldComponentUpdate(nextProps, nextState) {
        console.log("should update?")
        return true;
    }
    
    componentDidMount() {
        console.log("componet mounted")
    };
    componentDidUpdate(prevProps, prevState) {
        console.log("updated!")
    }
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("snapshot",prevProps,prevState)
        return null;
    }
    componentWillUnmount() {
        console.log("will unmount Bye!")
    }
    
    render() {
        console.log("render")
        return (
            <div className="container">
                <h2>My Counter</h2>
                <p>counter:{this.state.count}</p>
                <button onClick={()=> this.increase()}>Arttır</button>
                <button onClick={()=> this.decrease()}>Azalt</button>
                <button onClick={()=> this.reset()}>Sıfırla</button>
                <button onClick={()=> this.componentWillUnmount()}>Unmount</button>
               
            </div>
        )
    }
}