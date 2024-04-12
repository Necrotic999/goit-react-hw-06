import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contactName = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  // console.log(contactName);
  // const searchUser = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(contactName);
  // });

  return (
    <ul className={css.contacts_list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
