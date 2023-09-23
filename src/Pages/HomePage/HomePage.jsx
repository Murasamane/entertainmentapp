/* eslint-disable no-unused-vars */
import styles from "./HomePage.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useMovies } from "../../context/MovieContext";
import Landing from "../../components/Landing/Landing";
import SearchedList from "../../components/SearchedList/SearchedList";
import Loader from "../../components/Loader/Loader";

function HomePage() {
  const { searchedValue, loading } = useMovies();
  if (loading === true) return <Loader />;
  return (
    <div className={styles.container}>
      {searchedValue.length === 0 ? <Landing /> : <SearchedList />}
    </div>
  );
}

export default HomePage;
