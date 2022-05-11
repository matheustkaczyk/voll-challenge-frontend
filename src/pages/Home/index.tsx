import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AppContext, { requestUserInfo } from '../../context/appContext';
import httpRequest from '../../utils/httpRequest';

const Home = () => {
  const { loggedUserInfo, setLoggedUserInfo } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/signin');
        return;
      }

      const { data } = await httpRequest()
      .get('/user', { headers: { Authorization: token } });

      setLoggedUserInfo(data.data as requestUserInfo);
    }

    fetchUser();
  }, []);

  return(
    <div>
      home
    </div>
  )
}

export default Home;
