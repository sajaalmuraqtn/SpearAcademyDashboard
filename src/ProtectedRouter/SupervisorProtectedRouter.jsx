import React from 'react'

export default function SupervisorProtectedRouter() {
    const { user, getProfile } = useContext(AuthContext);
    if (!localStorage.getItem('AdminToken')) {
        return <Navigate to='/login' />; // Corrected closing tag for Navigate component  
    }
    getProfile();
    if (user.role !== 'SuperVisor') {
        return <Navigate to='/admin' />;
    } else {
        return <>{children}</>; // Render children using fragment 
    }
}
