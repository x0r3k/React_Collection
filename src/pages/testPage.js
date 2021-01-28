import React from "react"
// import ReactDOM from "react-dom"
// import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

// class Timer {
//     secondsPassed = 0

//     constructor() {
//         makeAutoObservable(this)
//     }

//     increaseTimer() {
//         this.secondsPassed += 1
//     }
// }

// const myTimer = new Timer()

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
const TimerView = observer(({ timer }) => {
  return (
    <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
  );
});

// ReactDOM.render(<TimerView timer={myTimer} />, document.body)

// setInterval(() => {
//     myTimer.increaseTimer()
// }, 1000);

export default TimerView;