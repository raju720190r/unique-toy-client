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
import UpdateToy from "../components/Pages/UpdateToy";
import ErrorPage from "../components/Pages/Shared/ErrorPage";
// import Tabs from "../components/Layout/Home/Tabs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element:<AllToys></AllToys>
      },
      {
        path:"viewDetails/:id",
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://toys-store-server.vercel.app/toys/${params.id}`)
      },
      {
        path:'updateToy/:id',
        element:<PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader:({params})=>fetch(`https://toys-store-server.vercel.app/toys/${params.id}`)

      },
     
    
    ]
  },
  
]);
export default router;