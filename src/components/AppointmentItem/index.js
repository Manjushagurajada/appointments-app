import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStarButton} = props
  const {title, date, isFavourite, id} = appointmentDetails

  const onClickStarButton = () => {
    toggleStarButton(id)
  }

  const starurl = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list-item">
      <div>
        <p>{title}</p>
        <p className="date-style">Date: {date}</p>
      </div>
      <button
        type="button"
        className="star-button"
        onClick={onClickStarButton}
        data-testid="star"
      >
        <img src={starurl} alt="star" className="starred-icon" />
      </button>
    </li>
  )
}

export default AppointmentItem
