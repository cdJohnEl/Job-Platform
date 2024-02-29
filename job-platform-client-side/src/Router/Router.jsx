import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import { createBrowserRouter } from "react-router-dom";
import CreateJob from "../Pages/CreateJob";
import Myjobs from "../Pages/Myjobs";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import LandingPage from "../Pages/LandingPage";
// import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "/my-job",
        element: <Myjobs />,
      },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`https://job-platform-ffzr.onrender.com/all-jobs/${params.id}`),
      },
    ],
  },
  // {
  //   path: "/landing-page",
  //   element: <LandingPage/>,
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
]);

export default router;
