// Write your code here

import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {
    timerInMins: 25,
    timerInSec: 0,
    startTimer: false,
    resetButton: true,
  }

  changeFirstButton = () => {
    const {startTimer, timerInMins, timerInSec} = this.state
    this.setState(prevState => ({
      startTimer: !prevState.startTimer,
      resetButton: false,
    }))

    const isTimerCompleted = timerInSec === timerInMins * 60
    this.timerId = setInterval(this.digitalClock, 1000)
    console.log(startTimer)

    if (startTimer) {
      this.clearTimerInterval()
    }
  }

  digitalClock = () => {
    const {timerInSec} = this.state
    if (timerInSec === 0) {
      this.setState({timerInSec: 59})
      this.setState(prevState => ({timerInMins: prevState.timerInMins - 1}))
    } else {
      this.setState(prevState => ({timerInSec: prevState.timerInSec - 1}))
    }
  }

  decreaseTimerButton = () => {
    const {resetButton} = this.state
    if (resetButton) {
      this.setState(prevState => ({timerInMins: prevState.timerInMins - 1}))
    }
  }

  increaseTimerButton = () => {
    const {resetButton} = this.state

    if (resetButton) {
      this.setState(prevState => ({timerInMins: prevState.timerInMins + 1}))
    }
  }

  resetAllButton = () => {
    this.setState({
      startTimer: false,
      timerInMins: 25,
      timerInSec: 0,
      resetButton: true,
    })
  }

  render() {
    const {timerInMins, timerInSec, startTimer} = this.state

    const firstButtonText = startTimer ? 'Pause' : 'Start'
    const firstButtonUrl = startTimer
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const firstImageAlt = startTimer ? 'pause icon' : 'play icon'
    const timerStatus = startTimer ? 'Running' : 'Paused'

    const minsToDisplay = timerInMins > 9 ? timerInMins : `0${timerInMins}`
    const secToDisplay = timerInSec > 9 ? timerInSec : `0${timerInSec}`

    return (
      <div className="app-container">
        <div className="digital-timer-app">
          <h1 className="main-heading">Digital Timer</h1>
          <div className="content-container">
            <div className="timer-background-container">
              <div className="timer-clock-container">
                <h1 className="timing-count">{`${minsToDisplay}:${secToDisplay}`}</h1>
                <p className="paused-text">{timerStatus}</p>
              </div>
            </div>
            <div>
              <div className="button-container">
                <button
                  className="start-button"
                  onClick={this.changeFirstButton}
                  type="button"
                >
                  <img
                    src={firstButtonUrl}
                    alt={firstImageAlt}
                    className="play-icon-image"
                  />
                  <p className="button-text-content">{firstButtonText}</p>
                </button>
                <button
                  type="button"
                  onClick={this.resetAllButton}
                  className="reset-button"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                    alt="reset icon"
                    className="play-icon-image"
                  />
                  <p className="button-text-content">Reset</p>
                </button>
              </div>
              <p className="set-timer-text">Set Timer limit</p>
              <div className="set-timer-container">
                <button
                  onClick={this.decreaseTimerButton}
                  type="button"
                  className="adjust-button"
                >
                  <p className="button-styling">-</p>
                </button>
                <div className="timer-changing-container">
                  <p className="timer-set-count">{timerInMins}</p>
                </div>
                <button
                  onClick={this.increaseTimerButton}
                  className="adjust-button"
                  type="button"
                >
                  <p className="button-styling">+</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
