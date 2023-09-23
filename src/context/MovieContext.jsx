/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import data from "../../data/data.json";
const MovieContext = createContext();

const initialState = {
  movies: [],
  searchedMovies: [],
  searchedValue: "",
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "dataReceived":
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case "searchMovie":
      return {
        ...state,
        searchedValue: action.payload,
        searchedMovies:
          action.payload === ""
            ? state.searchedMovies
            : state.movies.filter((movie) =>
                movie.title.toLowerCase().includes(action.payload.toLowerCase())
              ),
      };
    case "bookmark":
      const updatedMovies = state.movies.map((movie) =>
        movie.title === action.payload
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      );

      return {
        ...state,
        movies: updatedMovies,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function MovieContextProvider({ children }) {
  const [{ movies, searchedMovies, searchedValue, loading }, dispatch] =
    useReducer(reducer, initialState);

  const tvShows = movies.filter((movie) => movie.category === "TV Series");
  const films = movies.filter((movie) => movie.category === "Movie");
  const bookmarked = movies.filter((movie) => movie.isBookmarked === true);
  // useEffect(() => {
  //   async function getMovies() {
  //     try {
  //       const res = await fetch("http://localhost:3000/movies");
  //       const data = await res.json();
  //       dispatch({ type: "dataReceived", payload: data });
  //     } catch (err) {
  //       console.log(err.message);
  //       throw new Error("There was a problem loading the data");
  //     }
  //   }
  //   getMovies();
  // }, []);

  useEffect(() => {
    dispatch({ type: "loading" });
    setTimeout(() => {
      dispatch({ type: "dataReceived", payload: data.movies });
    }, 500);

    return () => {};
  }, []);
  return (
    <MovieContext.Provider
      value={{
        movies,
        films,
        tvShows,
        bookmarked,
        searchedMovies,
        dispatch,
        loading,
        searchedValue,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MovieContext);
  if (context === undefined)
    throw new Error(
      "MoviesContext is being used outside ofr MoviesContextProvider"
    );
  return context;
}
export { MovieContextProvider, useMovies };
