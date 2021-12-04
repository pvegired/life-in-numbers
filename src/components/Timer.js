import React, { Component } from 'react'



class Timer extends Component {
    state = {
        date: new Date()
    };

    callMe(){
    setInterval( () => {
        this.setState({date: new Date()});
    },1000);
    }

    render(){
        return(
            <div className="clock">
                <h3>{"Time Left for today -" + (24 - (this.state.date.getHours() + 1)).toString() + ":" + (60 - (this.state.date.getMinutes() + 1)).toString() + ":" + (60 - (this.state.date.getSeconds())).toString()}</h3>
                {this.callMe()}
            </div>
            
        );
        
    }
}

export default Timer;
