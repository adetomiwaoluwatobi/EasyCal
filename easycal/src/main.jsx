import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Signup from './component/SignupPage.jsx'
import Login from './component/logPage.jsx'
import Dashboard from './component/dashboard.jsx'
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
