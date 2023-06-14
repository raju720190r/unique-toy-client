import AnimatedCursor from "react-animated-cursor"
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import React from 'react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
        <AnimatedCursor />
        </div>
    </AuthProvider>
  
  </React.StrictMode >,
)
