import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
function App() {
  const [users, setUsers] = useState(() => {
    const data = JSON.parse(window.localStorage.getItem("users"));
    if (data?.length) {
      return data;
    } else {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
  });

  const [userName, setUserName] = useState("");

  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users));
  });

  const filteredUsers = searchUser(users, userName);

  function searchUser(users, userName) {
    return users.filter((user) => user.name.toLowerCase().includes(userName));
  }

  function addUser(user) {
    setUsers((prev) => [...prev, user]);
  }

  function deleteUser(id) {
    setUsers(users.filter((prev) => prev.id !== id));
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      <SearchBox userName={userName} setUserName={setUserName} />
      {users.length > 0 ? (
        <ContactList users={filteredUsers} deleteUser={deleteUser} />
      ) : (
        <p className="text">You dont have contacts!!!</p>
      )}
    </div>
  );
}

export default App;
