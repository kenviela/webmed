import { useState } from "react";
import "./SearchBar.scss";
import Input from "../Input/Index";
const SearchBar = (props) => {
  const [search, setSearch] = useState();
  const handleOnChangeSearch = (event) => setSearch(event.target.value);

  const handleOnClick = (event) => {
    event.preventDefault();
    return props.handleFilter(search);
  };
  return (
    <div>
      <form className="SearchBar">
        <Input
          name="search"
          type="text"
          labelText="Buscar"
          onChange={handleOnChangeSearch}
        />
        <input
          type="submit"
          value="Buscar"
          className="SearchBar__submit"
          onClick={handleOnClick}
        />
      </form>
    </div>
  );
};

export default SearchBar;
