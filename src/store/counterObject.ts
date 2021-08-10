import { observable } from "mobx";

const counterObject = observable({
    num: 0,
    increase() {
        this.num++
    },
    decrease() {
        this.num--
    },
    get doubled() {
        return this.num * 2
    }
})

export default counterObject