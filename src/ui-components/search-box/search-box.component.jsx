import "../search-box/search-box.styles.css";

export const SearchBox = (props) => (
  <input
    className="search"
    type="search"
    placeholder={props.placeholder}
    onChange={props.onChange}
  ></input>
);
