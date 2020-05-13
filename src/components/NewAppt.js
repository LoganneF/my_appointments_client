import React from 'react'
import AppointmentForm from './AppointmentForm.js'

function NewAppt(props) {
    return (
      <div className="add-appt">
        <AppointmentForm handleSubmit={props.handleSubmit}/>
      </div>
    )
}

export default NewAppt