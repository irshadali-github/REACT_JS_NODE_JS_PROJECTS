import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css';
import App from './App';
import Header from './routes/Header';
import Footer from './routes/Footer';
import ErrorPage from './error-page';
import Home from './routes/Home';
import Notes from './routes/Notes';
import AboutUs from './routes/AboutUs';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';

const router=createBrowserRouter([
  {
    path:"/",
    element:<><Header/><App /><Footer/></>,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/home",
        element:<Home />
      },
      {
        path:"/Notes",
        element:<Notes />
      },
      {
        path:"/about",
        element:<AboutUs />
      },
      {
        path:"/signin",
        element:<SignIn />
      },
      {
        path:"/signup",
        element:<SignUp />
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
