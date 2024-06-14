import React from 'react';
import ReactDOM from 'react-dom/client';

//CSS
import './CSS/normalize.css';
import './CSS/all.min.css';
import './SASS/main.css';

//ROUTE
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



