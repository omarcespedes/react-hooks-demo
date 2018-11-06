import React from 'react';

export default class classCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.handleClickIncrement = this.handleClickIncrement.bind(this)
    }

    componentDidMount() {
        document.title = 'Your counter is : ' + this.state.counter;
        this.listener = document.addEventListener('click', this.listener)
    }
    
    componentDidUpdate() {
        document.title = 'Your counter is : ' + this.state.counter;
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.listener)
    }

    listener(e) {

        let pageX = e.pageX;
        let pageY = e.pageY;
    
        console.log('From class', pageX, pageY);
    }

    handleClickIncrement() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Class Counter</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClickIncrement}>Increment</button>
            </div>
        )
    }
}