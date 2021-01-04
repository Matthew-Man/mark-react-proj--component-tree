import ReactDOM from "react-dom";

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
      <DeveloperBio />
      <hr />
      <TicketStatus />
    </div>
  );
}

function DeveloperBio() {
  return (
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
  );
}

function TicketStatus() {
  return (
    <div>
      <h2>Ticket status</h2>
      <TicketCount />
      <NextTicket />
    </div>
  );
}

function TicketCount() {
  return (
    <p>
      There are currently <b>{tickets.length}</b> tickets left to complete.
    </p>
  );
}

function NextTicket() {
  return (
    <p>
      <b>Your next ticket:</b> {tickets[0]}
    </p>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
