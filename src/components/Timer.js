import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:10
        }
    }
    
    componentDidMount() {
        this.intervalId = setInterval(() => {
            if(this.state.value > 0) {
                this.setState(prevState => ({
                    value: prevState.value - 1
                }))
            } else {
                clearInterval(this.intervalId)
            }
        }, 1000)
    }
    
    render() {
        return (
            <div>
                <h1>TIMER</h1>
                <h2>{this.state.value}</h2>
            </div>
        )
    }
}

export default Timer
