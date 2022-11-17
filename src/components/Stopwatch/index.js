import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    time: 0,
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  renderMinutes = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {time} = this.state
    const seconds = Math.floor(time % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startButton = () => {
    this.timerId = setInterval(this.runClock, 1000)
  }

  restartButton = () => {
    this.setState({time: 0})
    clearInterval(this.timerId)
  }

  stopButton = () => {
    clearInterval(this.timerId)
    console.log('stop')
  }

  runClock = () => {
    this.setState(prevState => ({time: prevState.time + 1}))
  }

  render() {
    const displayTime = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="container">
        <div className="sub-container">
          <h1>StopWatch</h1>
          <div className="main-box">
            <div className="box">
              <div className="timer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  className="image"
                  alt="stopwatch"
                />
                <p className="desc">Timer</p>
              </div>
              <div className="time">
                <h1 className="displayTime">{displayTime}</h1>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="btn1"
                  onClick={this.startButton}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="btn2"
                  onClick={this.stopButton}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="btn3"
                  onClick={this.restartButton}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
