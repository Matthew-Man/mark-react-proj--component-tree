import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const developer = {
  firstName: "Arbelia",
  lastName: "Arkansas",
  company: "Martco PLC",
};
const dayNumber = 4;
const tickets = ["Log on", "Do something else", "Debug this code"];

function App() {
  return (
    <div>
      <h1>Development log: day {dayNumber}</h1>
      <ul>
        <li>
          <b>Developer name: </b>
          {developer.lastName.toUpperCase() + ", " + developer.firstName}
        </li>
        <li>
          <b>Company: </b>
          {developer.company}
        </li>
      </ul>
      <hr />
      <h2>Ticket status</h2>
      <p>
        There are currently <b>{tickets.length}</b> tickets left to complete.
      </p>
      <p>
        <b>Your next ticket:</b> {tickets[0]}
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
