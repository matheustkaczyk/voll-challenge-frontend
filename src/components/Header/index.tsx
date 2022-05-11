import { useNavigate } from "react-router-dom";
import { userInfo } from "../../context/appContext";

const Header = ({ name, balance, role }: userInfo) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/manage');
    return;
  }

  return(
    <header>
      <h2>{name}</h2>
      <h2>{balance}</h2>
      { role === 'admin' && <h2 onClick={() => handleRedirect()}>Gerenciar</h2> }
    </header>
  )
}

export default Header;
