import React from 'react';
import NewAppt from './NewAppt.js'

function Footer(props) {
    return (
      <footer>
        <h1>Footer</h1>
        <NewAppt handleSubmit={props.handleSubmit}/>
      </footer>
    )
}

export default Footer