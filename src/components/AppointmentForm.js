import React from "react";
import Input from "./Input.js";

class AppointmentForm extends React.Component {
  state = {
    date: "",
    time: "",
    patient: "",
    doctor: "",
    specialty: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();

    const { date, time, patient, doctor, specialty } = this.state;
    const appointment = {
        date: date,
        time: time,
        patient: patient,
        doctor: doctor,
        specialty: specialty
    };

    if (this.props.appointment) appointment.id = this.props.appointment.id;

    this.props.handleSubmit(event, appointment);
  };

  componentDidMount() {
    if (this.props.appointment) {
      const { date, time, patient, doctor, specialty, id } = this.props.appointment;
      this.setState({
        date: date || "",
        time: time || "",
        patient: patient || "",
        doctor: doctor || "",
        specialty: specialty || "",
        id: id || "",
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"date"}
          placeholder={"Appointment date"}
          type={"text"}
          value={this.state.date}
          id={"date"}
        />
        <Input
          handleChange={this.handleChange}
          name={"time"}
          placeholder={"Time of Appointment"}
          type={"text"}
          value={this.state.time}
          id={"time"}
        />
        <Input
          handleChange={this.handleChange}
          name={"patient"}
          placeholder={"Patient"}
          type={"text"}
          value={this.state.patient}
          id={"patient"}
        />
        <Input
          handleChange={this.handleChange}
          name={"doctor"}
          placeholder={"Doctor"}
          type={"text"}
          value={this.state.doctor}
          id={"doctor"}
        />
        <Input
          handleChange={this.handleChange}
          name={"specialty"}
          placeholder={"Specialty"}
          type={"text"}
          value={this.state.specialty}
          id={"specialty"}
        />
        <input
          type="submit"
          value={this.props.appointment ? "update this appointment" : "add an appointment"}
        />
      </form>
    );
  }
}

export default AppointmentForm;
