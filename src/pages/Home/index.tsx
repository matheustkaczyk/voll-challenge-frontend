import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Header from '../../components/Header';

import AppContext, { userInfo } from '../../context/appContext';
import httpRequest from '../../utils/httpRequest';

const Home = () => {
  const { loggedUserInfo, setLoggedUserInfo, products, setProducts } = useContext(AppContext);
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

      setProducts(products.data);
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
        { products.length > 0 && products.map((product) => {
          return <Card
            key={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            img_url={product.img_url}
            createdAt={product.createdAt}
            updatedAt={product.updatedAt}
          />
        }) }
      </>
    </main>
  )
}

export default Home;
