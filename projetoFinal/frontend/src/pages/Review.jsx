import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import { getMovieById, getMovieCredits } from "../Services/api";
import "../css/Review.css";

function Review() {
  const { id } = useParams();
  const { favorites, addToFavorites, removeFromFavorites, updateFavorite } = useMovieContext();

  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const data = await getMovieById(id);
        setMovie(data);

        const fav = favorites.find((favMovie) => favMovie.id === data.id);
        if (fav) {
          setIsFavorite(true);
          setRating(fav.rating || 0);
          setComment(fav.comment || "");
        }

        const credits = await getMovieCredits(id);
        const directorInfo = credits.crew.find((person) => person.job === "Director");
        setDirector(directorInfo ? directorInfo.name : "Não informado");

        const mainCast = credits.cast.slice(0, 5).map((actor) => actor.name);
        setCast(mainCast);

      } catch (error) {
        console.error("Erro ao carregar filme:", error);
      }
    };

    loadMovie();
  }, [id, favorites]);

  const handleSave = () => {
    const movieWithReview = { ...movie, rating, comment };
    addToFavorites(movieWithReview);
    setIsFavorite(true);
  };

  const handleUpdate = () => {
    const updatedMovie = { ...movie, rating, comment };
    updateFavorite(updatedMovie);
  };

  const handleRemove = () => {
    removeFromFavorites(movie.id);
    setIsFavorite(false);
    setRating(0);
    setComment("");
  };

  if (!movie) return <div>Carregando filme...</div>;

  return (
    <div className="review-page">
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>{movie.title}</h2>
          <h4>{movie.tagline}</h4>
          <p><strong>Sinopse:</strong> {movie.overview}</p>
          <p><strong>Diretor:</strong> {director}</p>
          <p><strong>Elenco:</strong> {cast.join(", ")}</p>
        </div>
      </div>

      <div className="review-section">
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "filled-star" : "empty-star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <label>Review</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="write your review..."
        />

        <div className="review-buttons">
          {isFavorite ? (
            <>
              <button onClick={handleUpdate}>Atualizar Avaliação</button>
              <button onClick={handleRemove} className="remove-btn">Remover da Lista</button>
            </>
          ) : (
            <button onClick={handleSave}>Add to list</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Review;
