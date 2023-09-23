import { useMovies } from "../../context/MovieContext";
import RecommendedMovie from "../RecommendedMovie/RecommendedMovie";
import styles from "./SearchedList.module.css";

function SearchedList() {
  const { searchedMovies, searchedValue } = useMovies();
  return (
    <article className={styles.recommended}>
      <h2 className={styles.title}>
        Found {searchedMovies.length} for `{searchedValue}`
      </h2>
      <div className={styles.recommendedMovies}>
        {" "}
        {searchedMovies.map((movie) => (
          <RecommendedMovie movie={movie} key={movie.title} />
        ))}
      </div>
    </article>
  );
}

export default SearchedList;
