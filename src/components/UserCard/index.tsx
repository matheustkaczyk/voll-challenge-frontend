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

    const request = await httpRequest()
      .patch(`/user/currency`, { name, email, currency: `${operation}${currency}` }, { headers: { Authorization: token } });
    
    if (request.status === 200) {
      return alert('Operação realizada com sucesso!');
    } else {
      return alert('Erro ao realizar operação!');
    }
  }

  return(
    <>
      <section>
        <h5>{_id}</h5>
        <h4>{name}</h4>
        <p>{email}</p>
        <p>{balance}</p>
        <p>{role}</p>
      </section>
      <div>
        <label>
          Alterar quantidade de moedas
          <Input
            type="number"
            placeholder="Quantidade de moedas"
            classN="input"
            handleChange={(e) => setCurrency(e.target.value)}
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
        </label>
      </div>
    </>
  )
}

export default UserCard;
