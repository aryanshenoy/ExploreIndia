import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './routes/AboutUs.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './routes/LandingPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "home",
    element: <App/>
  },
  {
    path: "about-us",
    element: <AboutUs />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
