import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';

const AuthWrapper = ({ children }) => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      }
      setIsCheckingAuth(false);
    });

    return unsubscribe;
  }, [navigate]);

  if (isCheckingAuth) {
    return <h1>Loading...</h1>; 
  }

  return children;
};

export default AuthWrapper;