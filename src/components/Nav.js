import React from 'react'

function Nav(props) {
    return (
      <nav>
        <h1>Doctors</h1>
        <div className="doctors">
          <h3>Dr. Pratt - <small>Dentist</small></h3>
          <p><strong>Smile Dentistry</strong> <br />
            3 Saxon Lane <br />
            Portland, ME 04103</p>
        </div>
        <div className="doctors">
          <h3>Dr.Reed - <small>Optometrist</small></h3>
  
          <p><strong>West Optometric Center</strong> <br />
            11245 Melody Dr. <br />
            Grant, ME 04103</p>
        </div>
      </nav>
    )
}

export default Nav