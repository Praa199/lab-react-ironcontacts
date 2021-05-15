import React from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

let newArr = contacts.slice(0, 5);

function App() {
  const [users, setUsers] = React.useState(newArr);

  function addRandomContact() {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    setUsers([contacts[randomIndex], ...users]);
  }

  function sortByName() {
    setUsers(
      [...users].sort((a, b) => {
        return a["name"].localeCompare(b["name"]);
      })
    );
  }

  function sortByPopularity() {
    setUsers(
      [...users].sort((a, b) => {
        return a["popularity"] - b["popularity"];
      })
    );
  }

  function removeContact(id) {
    setUsers(
      users.filter(function (obj) {
        return obj["id"] !== id;
      })
    );
  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={addRandomContact}>Add Random</button>
      <button onClick={sortByName}>Name Sort</button>
      <button onClick={sortByPopularity}>Popularity Sort</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((singleUser, index) => {
            return (
              <tr key={`${singleUser.id} - ${index}`}>
                <td>
                  <img
                    src={singleUser.pictureUrl}
                    alt={singleUser.name}
                    style={{ height: "150px" }}
                  ></img>
                </td>
                <td>{singleUser.name}</td>
                <td>{singleUser.popularity.toFixed(2)}</td>
                <button onClick={() => removeContact(singleUser["id"])}>
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
