import css from "./SearchBox.module.css";

const SearchBox = ({ userName, setUserName }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </label>
  );
};

export default SearchBox;
