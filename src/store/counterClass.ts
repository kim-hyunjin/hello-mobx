import { makeAutoObservable } from "mobx";

class Counter {
    number: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    increase = () => {
        this.number++
    }
    
    decrease = () => {
        this.number--
    }
}

const counterClass = new Counter()
export default counterClass