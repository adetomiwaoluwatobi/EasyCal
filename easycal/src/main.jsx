import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Signup from './component/SignupPage.jsx'
import Login from './component/logPage.jsx'
import Dashboard from './component/dashboard.jsx'
import DashboardProfile from './component/dashboardProfile.jsx'
import DashboardCalculator from './component/dashboardCalculator.jsx'
import DashboardInitial from './component/dashboardInitial.jsx'
import DashboardHome from './component/dashboardHome.jsx'
// import root from './routes/root.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "Home",
        element: <DashboardInitial />,
      },
      {
        path: "profile",
        element: <DashboardProfile />,
      },
      {
        path: "Calculator",
        element: <DashboardCalculator/>,
      },
      {
        path: "Settings",
        element: <DashboardHome/>,
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/Signup",
    element: <Signup />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
