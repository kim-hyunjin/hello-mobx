import { makeAutoObservable } from "mobx";

export class MyTimer {

    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTime() {
        this.secondsPassed += 1
    }

    resetTime() {
        this.secondsPassed = 0
    }

}

const timer = new MyTimer()

export default timer
