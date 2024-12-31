import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './provider/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster position='top-center'></Toaster>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
