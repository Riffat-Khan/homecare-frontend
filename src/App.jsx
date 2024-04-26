
import {createBrowserRouter , RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Overview from "./pages/profileDashboard/Overview/index";
import Issues from "./pages/profileDashboard/Issues/index"
import Vitals from "./pages/profileDashboard/Vitals/index"
import Reviews from "./pages/profileDashboard/Reviews/index"

function App() {
  const router = createBrowserRouter([

    {
      path : '/',
      element : <Home />
    },
    {
      path : '/profile-dashboard',
      element : <Overview />
    },   
    {
      path : '/profile-issues',
      element : <Issues />
    },
    {
      path : '/profile-vitals',
      element : <Vitals />
    },
    {
      path : '/profile-reviews',
      element : <Reviews />
    },
        
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
