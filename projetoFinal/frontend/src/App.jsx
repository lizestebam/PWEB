import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Review from "./pages/Review";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <MovieProvider>
      <SearchProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/review/:id" element={<Review />} />
          </Routes>
        </main>
      </SearchProvider>
    </MovieProvider>
  );
}

export default App;
