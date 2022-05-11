import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

import AppContext, { userInfo } from '../../context/appContext';
import httpRequest from '../../utils/httpRequest';

const Home = () => {
  const { loggedUserInfo, setLoggedUserInfo } = useContext(AppContext);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUser = async () => {

      if (!token) {
        navigate('/signin');
        return;
      }

      const { data } = await httpRequest()
      .get('/user', { headers: { Authorization: token } });

      setLoggedUserInfo(data.data as userInfo);
    };

    const fetchProducts = async () => {

      if (!token) {
        navigate('/signin');
        return;
      }

      const products = await httpRequest()
      .get('/products', { headers: { Authorization: token } });

      console.log(products);
    };

    fetchProducts();
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
      <>

      </>
    </main>
  )
}

export default Home;
