import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLayout from './Component/AdminLayout/AdminLayout.jsx';
import Home from './Pages/Admin/Home.jsx';
import Login from './Pages/Login/Login.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/admin',
      element: <AdminLayout />,
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
