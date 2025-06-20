import { createContext, useContext, useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../Services/api";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        if (searchQuery.trim() === "") {
          const popular = await getPopularMovies();
          setMovies(popular);
        } else {
          const results = await searchMovies(searchQuery);
          setMovies(results);
        }
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchQuery]);

  const value = {
    searchQuery,
    setSearchQuery,
    movies,
    error,
    loading,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
