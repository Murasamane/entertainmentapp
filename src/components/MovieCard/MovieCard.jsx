/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./MovieCard.module.css";
import { useMovies } from "../../context/MovieContext";

function MovieCard({ movie }) {
  const [play, setPlay] = useState(false);
  const { dispatch } = useMovies();
  const backgroundStyle = {
    backgroundImage: `url(../${movie.thumbnail.regular.small})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className={styles.cardContainer}
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
      style={backgroundStyle}
    >
      <div className={styles.categoryTitle}>
        <div className={styles.categories}>
          <span>{movie.year}*</span>
          <span>
            <img
              src={`${`../../assets/icon-category-${
                movie.category === "Movie" ? "movie" : "tv"
              }.svg`}`}
            />
          </span>
          <span>{movie.category}*</span>
          <span>{movie.rating}</span>
        </div>
        <h2>{movie.title}</h2>
      </div>
      <button
        className={styles.bookmark}
        onClick={() => dispatch({ type: "bookmark", payload: movie.title })}
      >
        <img
          src={`../../assets/icon-bookmark-${
            movie.isBookmarked ? "full" : "empty"
          }.svg`}
          alt=""
        />
      </button>
      {play && (
        <button className={styles.playButton}>
          <img src="../../assets/icon-play.svg" alt="play" />
          <p>Play</p>
        </button>
      )}
    </div>
  );
}

export default MovieCard;
