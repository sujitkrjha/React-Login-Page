import React, { useState, useEffect } from 'react';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
 
function Dashboard(props) {
  const [authLoading, setAuthLoading] = useState(true);
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    setAuthLoading(false);
    props.history.push('/login');
  }
 
  return (
    <div>
      Welcome User!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;