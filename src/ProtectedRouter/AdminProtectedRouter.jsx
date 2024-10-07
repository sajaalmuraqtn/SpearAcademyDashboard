import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

 export default function AdminProtectedRouter ({ children }) {
    const { user } = useContext(AuthContext);
    if (!localStorage.getItem('AdminToken')) {
        return <Navigate to='/login' />; // Corrected closing tag for Navigate component  
    }
     console.log(user);
    
    if (user.role !== 'Admin') {
        return <Navigate to='/supervisor' />;
    } else {
        return <>{children}</>; // Render children using fragment 
    }

}
