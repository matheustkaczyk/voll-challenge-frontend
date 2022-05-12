import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext, { productsInfo, userInfo } from '../../context/appContext';

import Button from '../../components/Button';
import Input from '../../components/Input';
import UserCard from '../../components/UserCard';

import httpRequest from '../../utils/httpRequest';

const Manager = () => {
  const [users, setUsers] = useState<userInfo[]>([]);
  const [newProduct, setNewProduct] = useState({
    description: '',
    img_url: '',
    name: '',
    price: 0,
    stock: 0,
  });
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

  const handleRequest = async () => {
    if (!token) {
      return navigate('/signin');
    }

    const request = await httpRequest()
    .post('/products', newProduct, { headers: { Authorization: token } });

    if (request.status === 201) {
      return alert('Produto criado com sucesso!')
    } else {
      return alert('Falha ao criar o produto')
    }
  }

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
            {
            users.length > 0 && users.map((user) => {
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
        </section>
        <section>
          <h4>Produtos</h4>
          <div>
            <label>
              Adicionar produtos
              <form>
                <Input
                  type="text"
                  placeholder="Nome do produto"
                  handleChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  classN="input"
                />
                <Input
                  type="text"
                  placeholder="Descrição do produto"
                  handleChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  classN="input"
                />
                <Input
                  type="text"
                  placeholder="Url da imagem"
                  handleChange={(e) => setNewProduct({ ...newProduct, img_url: e.target.value })}
                  classN="input"
                />
                <Input
                  type="number"
                  placeholder="Quantidade em estoque"
                  handleChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}
                  classN="input"
                />
                <Input
                  type="number"
                  placeholder="Preço"
                  handleChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                  classN="input"
                />
                <Button
                  type="button"
                  classN="button"
                  handleClick={() => handleRequest()}
                  text="Adicionar"
                />
              </form>
            </label>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Manager;
