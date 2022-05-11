import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext, { userInfo } from '../../context/appContext';
import Button from '../../components/Button';
import Input from '../../components/Input';
import httpRequest from '../../utils/httpRequest';
import UserCard from '../../components/UserCard';

const Manager = () => {
  const [users, setUsers] = useState<userInfo[]>([]);
  const { loggedUserInfo } = useContext(AppContext);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!loggedUserInfo.name) {
      return navigate('/home');
    }

    if (!token) {
      return navigate('/signin');
    }

    const fetchUsers = async () => {
    const { data } = await httpRequest()
    .get('/user/all', { headers: { Authorization: token } } )

    setUsers(data.data as userInfo[]);
    }

    fetchUsers();
  }, []);

  return(
    <main>
      <header>
        <h3>Painel de administrador</h3>
        <h3>{loggedUserInfo.name}</h3>
      </header>
      <div>
        <section>
          <h4>Moedas</h4>
          <div>
            { users.length > 0 && users.map((user) => {
              return <UserCard
                key={user._id}
                _id={user._id}
                name={user.name}
                email={user.email}
                balance={user.balance}
                role={user.role}
                created_at={user.created_at}
              />
            })
            }
          </div>
          <div>

          </div>
        </section>
        <section>
          
        </section>
      </div>
    </main>
  )
}

export default Manager;
