/* eslint-disable react/prop-types */
import styles from "./MoviesPage.module.css";
import RecommendedMovie from "../../components/RecommendedMovie/RecommendedMovie";
import { useMovies } from "../../context/MovieContext";
import Loader from "../../components/Loader/Loader";
function MoviesPage() {
  const { films, searchedValue, loading } = useMovies();
  const searchedFilms = films.filter((movie) =>
    movie.title.toLowerCase().includes(searchedValue)
  );

  if (loading === true) return <Loader />;
  return (
    <div className={styles.container}>
      <h2>Movies</h2>

      <div className={styles.movieContainer}>
        {searchedValue.length === 0
          ? films.map((movie) => (
              <RecommendedMovie key={movie.title} movie={movie} />
            ))
          : searchedFilms.map((movie) => (
              <RecommendedMovie key={movie.title} movie={movie} />
            ))}
      </div>
    </div>
  );
}

export default MoviesPage;
