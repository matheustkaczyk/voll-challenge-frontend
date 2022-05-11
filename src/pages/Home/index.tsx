import { useEffect, useContext } from 'react';
import AppContext from '../../context/appContext';

const Home = () => {
  const { loggedUserInfo, setLoggedUserInfo } = useContext(AppContext);

  return(
    <div>
      home
    </div>
  )
}

export default Home;
