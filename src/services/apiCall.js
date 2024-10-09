import axios from "axios";

// Function to fetch new movies (released in the current year)
export const getMovies = async () => {
  const apiKey = import.meta.env.VITE_APP_API_KEY; // Use your environment API key
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  try {
    const { data } = await axios(
      `http://www.omdbapi.com/?s=action&type=movie&apikey=${apiKey}` // Fetch new action movies from the current year
    );

    // Check if the response is successful
    if (data.Response === "True") {
      return data.Search; // Return the list of new action movies
    } else {
      console.error("Error:", data.Error); // Log error if no movies found
      return [];
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return error;
  }
};

// Function to fetch movie details by IMDb ID
export const getMoviesDetail = async (id) => {
  const apiKey = import.meta.env.VITE_APP_API_KEY; // Use your environment API key

  try {
    const { data } = await axios(
      `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}` // Fetch movie details using the IMDb ID
    );

    // Check if the response is successful
    if (data.Response === "True") {
      return data; // Return the movie details
    } else {
      console.error("Error:", data.Error); // Log error if movie details not found
      return null;
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return error;
  }
};
