import React from "react";
import AppointmentForm from "./AppointmentForm.js";

class Appointment extends React.Component {
  state = {
    formVisible: false,
  };

  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleUpdate = (event, appointment) => {
    console.log("update running");
    this.props.handleUpdate(event, appointment);
    this.toggleForm();
  };

  render() {
    const { appointment, handleDelete } = this.props;

    return (
      <>
        {this.state.formVisible ? (
          <AppointmentForm
            appointment={appointment}
            handleSubmit={this.handleUpdate}
            toggleForm={this.toggleForm}
          />
        ) : (
          <div >
            <table>
              <tr className="appointment">
                <td>{appointment.patient}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.specialty}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td><button onClick={() => handleDelete(appointment)}>X</button>
                    <button onClick={this.toggleForm}>Edit this Entry</button>
                </td>
              </tr>
            </table>
            
          </div>
        )}
      </>
    );
  }
}

export default Appointment;