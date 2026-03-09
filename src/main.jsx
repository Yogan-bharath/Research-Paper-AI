import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import UploadPage from './pages/UploadPage/UploadPage.jsx'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import ResultsPage from './pages/ResultsPage/ResultsPage.jsx'
import SearchPage from './pages/SearchPage/SearchPage.jsx'
import NotFound from './pages/NotFoundPage/NotFoundPage.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {path:'/',element:<App/>},
  {path:'/LandingPage',element:<LandingPage/>},
  {path:'/UploadPage',element:<UploadPage/>},
  {path:'/CategoriesPage',element:<CategoriesPage/>},
  {path:'/Dashboard',element:<Dashboard/>},
  {path:'/Results',element:<ResultsPage/>},
  {path:'/SearchPage',element:<SearchPage/>},
  {path:'/*',element:<NotFound/>}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
