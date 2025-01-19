import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
// import router from './routes/Router';
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import router from './routes/router';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster position="top-right"
          reverseOrder={false} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>


)
