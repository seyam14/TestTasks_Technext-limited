import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Componenet/ErrorPage/ErrorPage';
import Main from './Componenet/Layout/Main';
import Home from './Componenet/Home/Home';
import UserDetails from './Componenet/UserDetails/UserDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/:userId",
        element:<UserDetails></UserDetails>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
