import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ users, deleteUser }) => {
  return (
    <ul className={css.contacts_list}>
      {users.map((user) => (
        <Contact key={user.id} user={user} deleteUser={deleteUser} />
      ))}
    </ul>
  );
};

export default ContactList;
