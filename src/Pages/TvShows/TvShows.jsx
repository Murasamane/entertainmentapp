import Loader from "../../components/Loader/Loader";
import RecommendedMovie from "../../components/RecommendedMovie/RecommendedMovie";
import { useMovies } from "../../context/MovieContext";
import styles from "./TvShows.module.css";

function TvShows() {
  const { tvShows, searchedValue, loading } = useMovies();

  const searchedTvShow = tvShows.filter((show) =>
    show.title.toLowerCase().includes(searchedValue)
  );
  if (loading === true) return <Loader />;
  return (
    <div className={styles.container}>
      <h2>TV Shows</h2>

      <div className={styles.movieContainer}>
        {searchedValue.length === 0
          ? tvShows.map((movie) => (
              <RecommendedMovie key={movie.title} movie={movie} />
            ))
          : searchedTvShow.map((movie) => (
              <RecommendedMovie key={movie.title} movie={movie} />
            ))}
      </div>
    </div>
  );
}

export default TvShows;
