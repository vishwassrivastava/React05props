import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";

function App() {
  return (
    <div>
      <Card
        name={contacts[0].name}
        tel={contacts[0].phone}
        email={contacts[0].email}
        image={contacts[0].imgURL}
      ></Card>

      <Card
        name={contacts[1].name}
        tel={contacts[1].phone}
        email={contacts[1].email}
        image={contacts[1].imgURL}
      ></Card>
      <Card
        name={contacts[2].name}
        tel={contacts[2].phone}
        email={contacts[2].email}
        image={contacts[2].imgURL}
      ></Card>
    </div>
  );
}

export default App;
