import Loader from "../../components/Loader/Loader";
import RecommendedMovie from "../../components/RecommendedMovie/RecommendedMovie";
import { useMovies } from "../../context/MovieContext";
import styles from "./Bookmarks.module.css";

function Bookmarks() {
  const { bookmarked, searchedValue, searchedMovies, loading } = useMovies();
  const filteredSearchedMovies = searchedMovies.filter(
    (movie) => movie.isBookmarked === true
  );

  if (loading === true) return <Loader />;
  return (
    <div className={styles.container}>
      <h2>Bookmarked</h2>

      <div className={styles.movieContainer}>
        {searchedValue.length === 0
          ? bookmarked.map((movie) => (
              <RecommendedMovie key={movie.title} movie={movie} />
            ))
          : filteredSearchedMovies.map((movie) => (
              <RecommendedMovie key={movie.title} movie={movie} />
            ))}
      </div>
    </div>
  );
}

export default Bookmarks;
