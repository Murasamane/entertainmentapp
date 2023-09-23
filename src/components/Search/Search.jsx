import styles from "./Search.module.css";
import { useMovies } from "../../context/MovieContext";
function Search() {
  const { dispatch } = useMovies();
  function handleSearch(e) {
    e.preventDefault();
  }
  return (
    <form className={styles.searchContainer} onSubmit={handleSearch}>
      <label htmlFor="search">
        <img src="../../assets/icon-search.svg" alt="search" />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search for movies or TV series"
        onChange={(e) =>
          dispatch({ type: "searchMovie", payload: e.target.value })
        }
      />
    </form>
  );
}

export default Search;
