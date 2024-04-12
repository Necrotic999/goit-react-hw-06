import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice.js";
function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className="text">You dont have contacts!!!</p>
      )}
    </div>
  );
}

export default App;
