import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Timer extends Component{

    constructor(props){
        super(props)
        const { min, sec } = this.props
        this.state = {
            minutes: min,
            seconds: sec,
            onTimer: false
        }
    }

    componentDidUpdate(){
        const { onTimer } = this.state
        if(onTimer){
            this.updateTime()
        }
    }

    start = () => {
        const { min, sec } = this.props
        if(sec === 0){
            this.setState({
                seconds: 59,
                minutes: min - 1,
            })
        }
        this.setState({
            onTimer: true
        }) 
        this.interval = setInterval(() => {
            this.setState(prev => ({
              seconds: prev.seconds - 1
            }))
        }, 1000)
    }

    stop = () => {
        this.setState({
            onTimer: false
        })
        clearInterval(this.interval)
    }

    updateTime = () => {
        const { minutes, seconds } = this.state
        if(seconds < 0){
            this.setState(prev => ({
                seconds : 59,
                minutes: prev.minutes - 1
            }))
        }
        if(minutes === 0 && seconds <= 0){
            this.stop()
        }
    }

    render(){

        const { id, stopTimer } = this.props
        const { minutes, seconds, onTimer } = this.state

        return (
            <span className="time">
            <button 
              className="icon icon-play" 
              aria-label="play" 
              type="button"
              onClick={ this.start }
              disabled = { onTimer }
            />
            <button 
              className="icon icon-pause" 
              aria-label="pause" 
              type="button"
              onClick={ () => {
                    stopTimer(id, minutes, seconds)
                    this.stop()
              }}
              disabled = { !onTimer }
            />
            <span className="description">
              { (minutes >= 10) ? minutes : `0${minutes}`}:{ (seconds >= 10) ? seconds : `0${seconds}`}
            </span>
          </span>
        )
    }
}


Timer.propTypes = {
    min: PropTypes.number.isRequired,
    sec: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    stopTimer: PropTypes.func.isRequired,
    // done: PropTypes.bool.isRequired
}
