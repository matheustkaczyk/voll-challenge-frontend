import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userInfo } from "../../context/appContext";
import httpRequest from '../../utils/httpRequest';
import Button from "../Button";
import Input from "../Input";

const UserCard = ({ _id, name, email, balance, role }: userInfo) => {
  const [operation, setOperation] = useState('');
  const [currency, setCurrency] = useState('0');
  const navigate = useNavigate();

  const handleRequest = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/signin');
      return;
    }

    if (operation === '') {
      return alert('Selecione uma operação');
    }

    if (currency === '0') {
      return alert('Quantidade não pode ser zero');
    }

    const request = await httpRequest()
      .patch(`/user/currency`, { name, email, currency: `${operation}${currency}` }, { headers: { Authorization: token } });
    
    if (request.status === 200) {
      return alert('Operação realizada com sucesso!');
    } else {
      return alert('Erro ao realizar operação!');
    }
  }

  return(
    <div className='user-card'>
      <section>
        <div className='user-info'>
          <h4>NOME: <span>{name}</span></h4>
          <h5>ID: <span>{_id}</span></h5>
          <p>E-MAIL: <span>{email}</span></p>
          <p>PONTOS: <span>{balance}</span></p>
          <p>FUNÇÃO: <span>{role}</span></p>
        </div>
      </section>
          Alterar quantidade de moedas
      <div>
          <Input
            type="number"
            placeholder="Quantidade de moedas"
            classN="input"
            handleChange={(e) => setCurrency(e.target.value)}
            min={0}
          />
          <Button
            type="button"
            text="-"
            classN="button"
            handleClick={() => setOperation('-')}
          />
          <Button
            type="button"
            text="+"
            classN="button"
            handleClick={() => setOperation('+')}
          />
          <Button
            type="button"
            text="Confirmar"
            classN="button"
            handleClick={() => handleRequest()}
          />
      </div>
    </div>
  )
}

export default UserCard;
