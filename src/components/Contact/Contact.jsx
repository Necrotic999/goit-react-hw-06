import css from "./Contact.module.css";
import { BiSolidUser } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ user, deleteUser }) => {
  return (
    <li className={css.user}>
      <div className={css.wrapper}>
        <div className={css.inner_wrapper}>
          <BiSolidUser />
          <h3 className={css.username}>{user.name}</h3>
        </div>
        <div className={css.inner_wrapper}>
          <FaPhone />
          <p className={css.user_number}>{user.number}</p>
        </div>
      </div>
      <button
        className={css.button}
        onClick={() => deleteUser(user.id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
