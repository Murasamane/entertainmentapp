/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./RecommendedMovie.module.css";
import { useMovies } from "../../context/MovieContext";

function RecommendedMovie({ movie }) {
  const [play, setPlay] = useState(false);
  const { dispatch } = useMovies();
  return (
    <div
      className={styles.cardContainer}
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
    >
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
      <img src={movie.thumbnail.regular.medium} alt="" />
      <div className={styles.cardInfo}>
        <p className={styles.tags}>
          <span>{movie.year}*</span>
          <span>
            <img
              src={`${`../../assets/icon-category-${
                movie.category === "Movie" ? "movie" : "tv"
              }.svg`}`}
              alt={movie.title}
            />
          </span>
          <span>{movie.category} * {movie.rating}</span>
        </p>
        <p className={styles.title}>{movie.title}</p>
      </div>
      {play && (
        <button className={styles.playButton}>
          <img src="../../assets/icon-play.svg" alt="play" />
          <p>Play</p>
        </button>
      )}
    </div>
  );
}

export default RecommendedMovie;
