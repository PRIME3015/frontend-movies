import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./components/ErrorPage";
import Movies from "./routes/Movies";
import Login from "./routes/Login";
import MovieDetail from "./routes/MovieDetail";
import { Provider } from "react-redux";
import store from "./app/store";
import { loader as detailLoader } from "./routes/MovieDetail";

// Define the router configuration
const router = createBrowserRouter([
  {
    element: <Root />, // Root component that wraps the entire application
    errorElement: <ErrorPage />, // Error component for handling errors
    children: [
      {
        path: "/", // Home path
        element: <Movies />, // Movies component rendered on home path
      },
      {
        path: "login", // Login path
        element: <Login />, // Login component
      },
      {
        path: "/:id", // Dynamic path for movie detail based on ID
        element: <MovieDetail />, // MovieDetail component
        loader: detailLoader, // Loader function for fetching data
      },
    ],
  },
]);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* Redux Provider for state management */}
      <RouterProvider router={router} /> {/* React Router Provider */}
    </Provider>
  </StrictMode>
);
