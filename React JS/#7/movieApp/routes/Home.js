import { useEffect, useState } from "react";
import Movie from "/Users/nawon/movie-app/src/components/Movie.js";
function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoding(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loding ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              medium_cover_image={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
