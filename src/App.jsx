import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import About from './views/About';
import DishDelights from './views/DishDelights';
import PersonalFavourite from './views/PersonalFavourite';
import Contact from './views/Contact';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Layout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "dishdelights",
        element: <DishDelights />,
      },
      {
        path: "personalfavourite",
        element: <PersonalFavourite />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ],
  },
]);


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
