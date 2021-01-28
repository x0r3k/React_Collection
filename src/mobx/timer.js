import { makeAutoObservable, makeObservable, observable, computed, action } from "mobx"

class Timer {
  secondsPassed = 0

  constructor() {
    makeObservable(this, {
      secondsPassed: observable,
      // increaseTimer: action
    })
  }

  increaseTimer() {
    this.secondsPassed += 1
  }

  reset() {
    this.secondsPassed = 0
  }
}

export default Timer;