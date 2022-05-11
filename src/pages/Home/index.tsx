import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

import AppContext, { userInfo } from '../../context/appContext';
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

      setLoggedUserInfo(data.data as userInfo);
    }

    fetchUser();
  }, []);

  return(
    <main>
      <Header
        name={loggedUserInfo.name}
        balance={loggedUserInfo.balance}
        _id={loggedUserInfo._id}
        created_at={loggedUserInfo.created_at}
        email={loggedUserInfo.email}
        role={loggedUserInfo.role}
      />
    </main>
  )
}

export default Home;
