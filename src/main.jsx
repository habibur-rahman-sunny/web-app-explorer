import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootLayout from './Layout/RootLayout';
import HomePage from './Pages/HomePage/HomePage';
import Apps from './Pages/Apps/Apps';
import InstalledApp from './Pages/InstalledApps/InstalledApp';
import ErrorPage from './ErrorElement/ErrorPage';
import AppDetails from './Pages/AppDetails/AppDetails';
import InstalledAppProvider from './Context/InstalledAppProvider';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage/>,
    children:[
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path:"app/details/:id",
        Component: AppDetails,
      },
      {
        path: "/installedapps",
        Component: InstalledApp,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstalledAppProvider>
      <RouterProvider router={router}/>
    </InstalledAppProvider>
    <ToastContainer />
  </StrictMode>,
  
)
