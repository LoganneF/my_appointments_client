import React from 'react';
import NewAppt from './NewAppt.js'

function Footer(props) {
    return (
      <footer>
        <h3>Add New Appointment</h3>
        <NewAppt handleSubmit={props.handleSubmit}/>
      </footer>
    )
}

export default Footer