import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layouts/AppLayout/AppLayout";
import HomePage from "./Pages/HomePage/HomePage";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import TvShows from "./Pages/TvShows/TvShows";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="tvseries" element={<TvShows />} />
            <Route path="bookmarks" element={<Bookmarks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
