import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
    const navigate = useNavigate();
    const {currentUser} = useContext(AuthContext);

    useEffect(() => {
        if (!currentUser) return navigate("/smartbrain-frontend");
    }, [currentUser]);

  return null;
}

export default SignOut;