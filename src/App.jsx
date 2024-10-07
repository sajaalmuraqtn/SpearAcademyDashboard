import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLayout from './Component/AdminLayout/AdminLayout.jsx';
import Home from './Pages/Admin/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import axios from 'axios';
import SupervisorLayout from './Component/SupervisorLayout/SupervisorLayout.jsx';
import { AuthContextProvider } from './Contexts/AuthContext.jsx';
import AdminProtectedRouter from './ProtectedRouter/AdminProtectedRouter.jsx';
import SupervisorProtectedRouter from './ProtectedRouter/SupervisorProtectedRouter.jsx';

function App() {

  axios.defaults.baseURL = 'https://spearacademybackend.onrender.com';

  const router = createBrowserRouter([
    {
      path: '/login',
      element:  <AuthContextProvider><Login /></AuthContextProvider>
    },
    {
      path: '/admin',
      element: <AuthContextProvider>
        <AdminProtectedRouter><AdminLayout /></AdminProtectedRouter>
      </AuthContextProvider>,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'supervisors',
          element: <div>supervisor</div> // Changed to JSX element
        }
      ]
    },
    {
      path: '/supervisor',
      element:<AuthContextProvider><SupervisorProtectedRouter> <SupervisorLayout /></SupervisorProtectedRouter></AuthContextProvider> ,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'supervisors',
          element: <div>supervisor</div> // Changed to JSX element
        }
      ]
    }
  ]);

  return (
    <>
      <div className="wrapper">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
