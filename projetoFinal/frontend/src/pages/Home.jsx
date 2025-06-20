import MovieCard from "../components/MovieCard";
import { useSearchContext } from "../context/SearchContext";
import "../css/Home.css";

function Home() {
  const { movies, error, loading } = useSearchContext();

  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
