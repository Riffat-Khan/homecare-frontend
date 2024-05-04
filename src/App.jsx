
import {createBrowserRouter , RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Overview from "./pages/profileDashboard/Overview/index";
import Issues from "./pages/profileDashboard/Issues/index"
import Vitals from "./pages/profileDashboard/Vitals/index"
import Reviews from "./pages/profileDashboard/Reviews/index"
import Setting from "./pages/profileDashboard/Setting";
import Dashboard from "./pages/adminDashboard/Overview";
import AdminEmployees from "./pages/adminDashboard/Employee/employees";
import ProviderIssues from "./pages/providerDashboard/Issues/index"
import ProviderReviews from "./pages/providerDashboard/Reviews/index"
import ProviderVitals from "./pages/providerDashboard/Vitals/index";
import ProviderOverview from "./pages/providerDashboard/Overview/index";
import AddEmployee from "./pages/adminDashboard/Employee/employees"

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
    {
      path : '/profile-setting',
      element : <Setting />
    },
    {
      path : '/admin-dashboard',
      element : <Dashboard />
    },
    {
      path : '/admin-employees',
      element : <AdminEmployees />
    },
    {
      path : '/provider-issues',
      element : <ProviderIssues />
    },
    {
      path : '/provider-reviews',
      element : <ProviderReviews />
    },
    {
      path : '/profile-vitals',
      element : <ProviderVitals />
    },
    {
      path : '/provider-dashboard',
      element : <ProviderOverview />
    },
    {
      path : '/admin-employees',
      element : <AddEmployee />
    },
        
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
