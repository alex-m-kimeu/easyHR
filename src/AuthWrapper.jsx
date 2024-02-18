import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { TailSpin } from 'react-loader-spinner'

const AuthWrapper = ({ children }) => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      }
      setCheckingAuth(false);
    });

    return unsubscribe;
  }, [navigate]);

  if (checkingAuth) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin />
      </div>
    ); 
  }

  return children;
};

export default AuthWrapper;