import { BsSearch } from "react-icons/bs";
import "./Search.scss";

const Search = ({ placeholder, search, setSearch }) => {
  return (
    <form className="api-search-form">
      <div className="icon">
        <BsSearch />
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
      />
    </form>
  );
};

export default Search;
