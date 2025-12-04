import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Components/Home.jsx';
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';
import Coffedetails from './Components/Coffedetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index:true,
        loader: ()=> fetch('http://localhost:3000/coffees'),
        Component: Home
      },
      {
          path: 'coffee/:id',
          Component: Coffedetails
      },
      {
        path: 'addcoffee',
        Component: AddCoffe
      },
      {
        path:'updatecoffee/:id',
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffe
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
