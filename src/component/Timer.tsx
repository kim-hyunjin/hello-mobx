import React from "react";
import { observer } from "mobx-react";
import store from '../store';
import { MyTimer } from "../store/timer";

class Timer extends React.Component {
    timer: MyTimer = store.timer
    isStop: boolean = false
    timerInterval: NodeJS.Timeout | null = null
    
    startTimer = () => {
        this.isStop = false
        this.timerInterval = setInterval(() => {
            if (!this.isStop) {
                this.timer.increaseTime()
            }
        }, 1000)
    }

    stopTimer = () => {
        this.isStop = true
        clearInterval(this.timerInterval!)
    }

    resetTimer = () => {
        this.isStop = true
        clearInterval(this.timerInterval!)
        this.timer.resetTime()
    }

    render() {
        return (
            <div>
                <h1>Timer</h1>
                <h3>Seconds passed: {this.timer.secondsPassed}</h3>
                <button onClick={this.startTimer}>시작</button>
                <button onClick={this.stopTimer}>중단</button>
                <button onClick={this.resetTimer}>초기화</button>
            </div>
        )
    }
}

export default observer(Timer)