import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Layout/Home/Home";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import MyToy from "../components/Pages/MyToy";
import Blog from "../components/Pages/Blog";
import AddToy from "../components/Pages/AddToy";
import AllToys from "../components/Pages/AllToys";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
       path:"blog",
       element:<Blog></Blog>,
      },
      {
        path:"myToy",
        element:<MyToy></MyToy>
      },
      {
           path:"addToy",
           element:<AddToy></AddToy>
      },
      {
        path:"allToy",
        element:<AllToys></AllToys>
      }
    ]
  },
  
]);
export default router;