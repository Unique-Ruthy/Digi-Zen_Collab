import "./App.css";
// import Auth from "./auth";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Components/Authentication/loginPage/LoginForm";
import Register from "./Components/Authentication/signupPage/SignUp";
import Aboutus from "./Pages/AboutPage/Aboutus";
import Resources from "./Pages/Resources/Resources";
import DigitalCitizenship from "./Pages/Digital Citizenship";
import Literacy from "./Pages/DigitalLiteracy/Literacy";
import DataPrivacy from "./Pages/Data Privacy &  Protection";
import CyberSecurity from "./Pages/CyberSecurity";
import SocialMediaSafety from "./Pages/Social Media Safety";
import Contact from "./Pages/ContactPage/Contact";
import BlogPage from "./Pages/BlogPage/blogPage";
// import EditProfile from "./Pages/EditProfile";
import EditProfile from "./Pages/EditProfile";
import ForgotPassword from "./Pages/forgotPage";
import Layout from "./Components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  // {
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: " /LandingPage",
  //       element: <LandingPage />,
  //     },
  //   ],
  // },
  {
    path: "/Register",
    element: <Register />,
  },

  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/Aboutus",
    element: <Aboutus />,
  },

  {
    path: "/Contact",
    element: <Contact />,
  },

  {
    path: "/Blog",
    element: <BlogPage />,
  },

  {
    path: "/EditProfile",
    element: <EditProfile />,
  },

  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },

  {
    element: <Layout />,
    children: [
      {
        path: "/Resources",
        element: <Resources />,
      },

      {
        path: "/DigitalCitizenship",
        element: <DigitalCitizenship />,
      },

      {
        path: "/Literacy",
        element: <Literacy />,
      },

      {
        path: "/DataPrivacy",
        element: <DataPrivacy />,
      },

      {
        path: "/CyberSecurity",
        element: <CyberSecurity />,
      },

      {
        path: "/SocialMediaSafety",
        element: <SocialMediaSafety />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
