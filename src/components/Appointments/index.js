import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'

import {Component} from 'react'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: ''}

  toggleStarButton = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isFavorite: !eachItem.isFavorite}
        }
        return eachItem
      }),
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onClickAddButton = event => {
    const {title, date} = this.state
    event.preventDefault()
    const fullDate = format(new Date(date), 'dd MM yyyy, EEEE')
    const newItem = {
      id: uuidv4(),
      title,
      date: fullDate,
      isFavorite: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newItem],
      title: '',
      date: '',
    }))
  }
  render() {
    const {appointmentList, title, date} = this.state
    return (
      <div className="container">
        <div className="appointment-card">
          <div className="bg-container">
            <form>
              <h1>Add Appointment</h1>
              <div className="input-container">
                <label htmlFor="name-el">TITLE</label>
                <br />
                <input
                  type="text"
                  id="name-el"
                  className="search-bar"
                  placeholder="Title"
                  onChange={this.onChangeTitle}
                  value={title}
                />
              </div>
              <div className="input-container">
                <label htmlFor="date-el">DATE</label>
                <br />
                <input
                  type="date"
                  id="date-el"
                  className="search-bar"
                  onChange={this.onChangeDate}
                  value={date}
                />
              </div>
              <button className="add-button" onClick={this.onClickAddButton}>
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          <div className="appointments-part-container">
            <div>
              <h1>Appointments</h1>
              <ul className="unordered-list">
                {appointmentList.map(eachItem => (
                  <AppointmentItem
                    appointmentDetails={eachItem}
                    key={eachItem.id}
                    toggleStarButton={this.toggleStarButton}
                  />
                ))}
              </ul>
            </div>
            <button className="starred-button">Starred</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
