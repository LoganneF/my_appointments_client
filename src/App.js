import React from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';


class App extends React.Component {
  state = {
    appointments: []
  }

 handleAdd = (event, formInputs) => {
  event.preventDefault()
  fetch('https://house-appointments-api.herokuapp.com/appointments', {
    body: JSON.stringify(formInputs),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
})
.then(createdAppt => createdAppt.json())
.then(jsonedAppt => {
  this.setState({
    appointments: [jsonedAppt, ...this.state.appointments]
  })
})
.catch(error => console.log(error))
}

handleDelete = (deletedAppt) => {
  fetch(`https://house-appointments-api.herokuapp.com/${deletedAppt.id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((json) => {
      const appointments = this.state.appointments.filter(
        (appointment) => appointment.id !== deletedAppt.id
      );
      this.setState({ appointments });
    })
    .catch((error) => console.log(error));
};

handleUpdate = (event, formInputs) => {
  event.preventDefault();
  console.log("in it to add it");
  fetch(`https://house-appointments-api.herokuapp.com/appointments/${formInputs.id}`, {
    body: JSON.stringify(formInputs),
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((updatedAppt) => {
      this.getAppointments();
    })
    .catch((error) => console.log(error));
};

componentDidMount() {
  this.getAppointments()
}

getAppointments () {
  fetch('https://house-appointments-api.herokuapp.com/appointments')
    .then(response => response.json())
    .then(json => this.setState({appointments: json}))
    .catch(error => console.error(error))
}

  render() {
    return (
      <div className="App">
         <div className='container'>
          <Header />
          <Aside />
          <Main 
          appointments={this.state.appointments}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer 
          handleSubmit={this.handleAdd}
          />
        </div>
      </div>
    )
  }
}

export default App;
