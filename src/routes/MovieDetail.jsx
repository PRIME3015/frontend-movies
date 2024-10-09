import React from "react";
import styles from "../styles/MovieDetail.module.css";
import { getMoviesDetail } from "../services/apiCall";
import { useLoaderData } from "react-router-dom";

// Loader function to fetch movie details
export const loader = async ({ params }) => {
  const data = await getMoviesDetail(params.id);
  return { data }; // Return the fetched data
};

const MovieDetail = () => {
  const { data } = useLoaderData(); 

  
  if (!data) {
    return <h1 className={styles.error}>Movie not found</h1>; 
  }

 
  const { Title, Year, Poster, Genre, Director, Plot } = data; 

  return (
    <div className={styles.movieDetailContainer}>
      <h1 className={styles.title}>{Title}</h1>
      <img src={Poster} alt={Title} className={styles.poster} />{" "}
    
      <div className={styles.details}>
        <p>
          <strong>Year:</strong> {Year}
        </p>{" "}
       
        <p>
          <strong>Genre:</strong> {Genre}
        </p>{" "}
       
        <p>
          <strong>Director:</strong> {Director}
        </p>{" "}
     
        <p>
          <strong>Plot:</strong> {Plot}
        </p>{" "}
     
      </div>
    </div>
  );
};

export default MovieDetail;
