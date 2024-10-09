import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/moviesSlice";
import styles from "../styles/Movies.module.css";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieList, loading, error } = useSelector((state) => state.movies);
  console.log(movieList);

  // Function to get color based on vote
  const getVoteColor = (vote) => {
    if (vote > 8) return "green";
    else if (vote > 5) return "orange";
    return "red";
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    // Added return statement to wrap the JSX correctly
    <div className={styles.mainWrapper}>
      {error && <h1>{error}</h1>} {/* Display error message if exists */}
      {loading && <Loading />} {/* Show loading spinner if loading */}
      {!loading && (
        <div className={styles.moviesWrapper}>
          {movieList?.map((movie) => {
            const { Title, Poster, Year, imdbID, Type, Rating } = movie; // Assuming you have a Rating field

            return (
              <div
                key={imdbID}
                className={styles.cardWrapper}
                onClick={() => navigate(`/${imdbID}`)}
              >
                {" "}
                {/* Add click event to navigate to movie details */}
                <img src={Poster} alt={Title} />{" "}
                {/* Use Title for alt text for accessibility */}
                <div className={styles.cardBottom}>
                  <h5>{Title}</h5>
                  <span
                    className={styles.exportedStyle}
                    style={{ backgroundColor: `${getVoteColor(Rating)}` }} // Use the Rating value here
                  >
                    IMDB: {Rating} {/* Display the IMDb rating instead of ID */}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Movies;
