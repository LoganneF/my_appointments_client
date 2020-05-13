import React from "react";
import Appointments from "./Appointments.js";

function Main(props) {
    console.log(props);
    const { handleUpdate, handleDelete, appointments } = props;
    return (
      <main>
        <Appointments
          appointments={appointments}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </main>
    );
  }
  
  export default Main;