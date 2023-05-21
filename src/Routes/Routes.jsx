import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Layout/Home/Home";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import MyToy from "../components/Pages/MyToy";
import Blog from "../components/Pages/Blog";
import AddToy from "../components/Pages/AddToy";
import AllToys from "../components/Pages/AllToys";
import PrivateRoute from "./PrivateRoutes";
import ViewDetails from "../components/Pages/ViewDetails";


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
        element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
      },
      {
           path:"addToy",
           element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:"allToy",
        element:<PrivateRoute><AllToys></AllToys></PrivateRoute>
      },
      {
        path:'viewDetails/:id',
        element:<ViewDetails></ViewDetails>,
        loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
      }
    
    ]
  },
  
]);
export default router;