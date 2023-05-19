import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Layout/Home/Home";
import Login from "../components/Pages/Login";

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
      }
    ]
  },
  
]);
export default router;