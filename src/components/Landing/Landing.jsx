/* eslint-disable no-unused-vars */
import { Carousel } from "react-responsive-carousel";
import styles from "./Landing.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { useMovies } from "../../context/MovieContext";
import RecommendedMovie from "../RecommendedMovie/RecommendedMovie";
import { useEffect, useState } from "react";

function Landing() {
  const { movies } = useMovies();
  const [widthInner] = useState(window.innerWidth);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(() => {
    const initialWindowWidth = window.innerWidth;
    let initialCenterSlidePercentage = 36;

    if (initialWindowWidth < 1180) initialCenterSlidePercentage = 105;
    else if (initialWindowWidth < 1415) initialCenterSlidePercentage = 50;
    else if (initialWindowWidth < 1500) initialCenterSlidePercentage = 36;
    else if (initialWindowWidth < 2200) initialCenterSlidePercentage = 30;
    else initialCenterSlidePercentage = 25;

    return initialCenterSlidePercentage;
  });

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;

      if (newWindowWidth < 1180) setCenterSlidePercentage(105);
      else if (newWindowWidth < 1415) setCenterSlidePercentage(50);
      else if (newWindowWidth < 1500) setCenterSlidePercentage(30);
      else if (newWindowWidth < 2200) setCenterSlidePercentage(36);
      else setCenterSlidePercentage(25);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthInner]);
  return (
    <>
      <article>
        <h2 className={styles.title}>Trending</h2>
        <Carousel
          showIndicators={false}
          showThumbs={false}
          centerSlidePercentage={centerSlidePercentage}
          centerMode={true}
          showStatus={false}
          infiniteLoop={true}
          showArrows={true}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </Carousel>
      </article>
      <article className={styles.recommended}>
        <h2 className={styles.title}>Recommended For You</h2>
        <div className={styles.recommendedMovies}>
          {" "}
          {movies.map((movie) => (
            <RecommendedMovie movie={movie} key={movie.title} />
          ))}
        </div>
      </article>
    </>
  );
}

export default Landing;
