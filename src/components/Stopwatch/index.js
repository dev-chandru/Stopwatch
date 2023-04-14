// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerStarted: false,
    timerSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onResetingTimer = () => {
    clearInterval(this.timerId)
    this.setState({
      timerSeconds: 0,
    })
  }

  onStopingTimer = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({
      timerSeconds: prevState.timerSeconds,
    }))
  }

  onStartingTimer = () => {
    this.timerId = setInterval(this.start, 1000)
  }

  start = () => {
    this.setState(prevState => ({
      timerSeconds: prevState.timerSeconds + 1,
    }))
  }

  renderSecond = () => {
    const {timerSeconds} = this.state
    const second = Math.floor(timerSeconds % 60)

    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  renderMinute = () => {
    const {timerSeconds} = this.state
    const minute = Math.floor(timerSeconds / 60)

    if (minute < 10) {
      return `0${minute}`
    }
    return minute
  }

  render() {
    const {isTimerStarted} = this.state
    const time = `${this.renderMinute()}:${this.renderSecond()}`
    return (
      <div className="main-bg-container">
        <div className="main-card-container">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="stop-watch-container">
            <div className="timer-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stop-watch"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="main-timer">{time}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start-button"
                onClick={this.onStartingTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button"
                onClick={this.onStopingTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={this.onResetingTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
