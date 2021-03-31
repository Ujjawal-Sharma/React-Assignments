import React, { Component } from 'react'
import { Button, ButtonGroup } from '@material-ui/core';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count:0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1            
        })
    }
    render() {
        return (
            <div>
                <h1>COUNTER</h1>
                <h2>{this.state.count}</h2>
                <ButtonGroup>
                    <Button onClick={this.increment} variant="contained" color="primary">Increase</Button>
                    <Button onClick={this.decrement} variant="contained" color="secondary">Decrease</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Counter
