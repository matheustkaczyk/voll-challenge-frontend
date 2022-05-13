import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';

import AppContext, { userInfo } from '../../context/appContext';
import httpRequest from '../../utils/httpRequest';

const Home = () => {
  const {
    loggedUserInfo,
    setLoggedUserInfo,
    products,
    setProducts,
    productsFilter,
  } = useContext(AppContext);

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
    <section>
      <Header
        name={loggedUserInfo.name}
        balance={loggedUserInfo.balance}
        _id={loggedUserInfo._id}
        created_at={loggedUserInfo.created_at}
        email={loggedUserInfo.email}
        role={loggedUserInfo.role}
      />
      <div className='products-section'>
        { products.length > 0 && products.filter((item) => item.name.includes(productsFilter)).map((product) => {
          return <ProductCard
            key={product.name}
            _id={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            img_url={product.img_url}
            createdAt={product.createdAt}
            updatedAt={product.updatedAt}
          /> })
        }
      </div>
    </section>
  )
}

export default Home;
