import React, { useRef, useState } from 'react';
import { api } from '../../services/api';
import Button from '../Button';
import Input from '../Input';
import {
  ButtonContainer, Container, Content, Title,
} from './styles';

const CreateContact = () => {
  const yearsOldRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phone1Ref = useRef<HTMLInputElement>(null);
  const phone2Ref = useRef<HTMLInputElement>(null);
  const phone3Ref = useRef<HTMLInputElement>(null);

  const [countPhones, setCountPhones] = useState(1);

  const handleSubmit = async () => {
    const name = nameRef?.current?.value || '';
    const yearsOld = yearsOldRef?.current?.value || '';
    const phone1 = phone1Ref?.current?.value || '';
    const phone2 = phone2Ref?.current?.value || '';
    const phone3 = phone3Ref?.current?.value || '';

    if (name?.length === 0) return alert('Digite um nome');
    if (yearsOld?.length === 0) return alert('Digite a idade');
    if (phone1?.length < 13) return alert('Telefone 1: Digite um telefone valido');
    if (phone2?.length < 13 && countPhones >= 2) return alert('Telefone 2: Digite um telefone valido');
    if (phone3?.length < 13 && countPhones >= 3) return alert('Telefone 3: Digite um telefone valido');

    try {
      const result = await api.post('/contacts', {
        name,
        yearsOld: Number(yearsOld),
        phoneNumbers: [
          phone1,
          phone2,
          phone3,
        ].filter((phone) => phone), // remove string vazia
      });

      if (result.status === 201) {
        alert('Contato salvo com sucesso!');
      }
    } catch (err: any) {
      if (err.response) {
        console.log(err.response.data);
        if (err.response.data.message === 'This phone number already exists') {
          return alert('Este telefone já está em uso!');
        }
      }
      alert('Aconteceu algum erro, tente novamente!');
    }
  };

  const handleIncreaseCounter = () => {
    if (countPhones < 3) setCountPhones(countPhones + 1);
  };

  const handleDecreaseCounter = () => {
    if (countPhones > 1) setCountPhones(countPhones - 1);
  };

  return (
    <Container>
      <Title>Cadastre um novo contato</Title>
      <Content>
        <Input type="text" placeholder="Nome" ref={nameRef} />
        <Input type="number" placeholder="Idade" ref={yearsOldRef} />

        <Input type="phone" placeholder="Telefone 1" ref={phone1Ref} />
        {
          countPhones >= 2 && (
            <Input type="phone" placeholder="Telefone 2" ref={phone2Ref} />
          )

        }
        {
           countPhones >= 3 && (
           <Input type="phone" placeholder="Telefone 3" ref={phone3Ref} />

           )
         }

        <ButtonContainer>
          <button type="button" onClick={handleIncreaseCounter}>
            Adicionar
          </button>
          <button type="button" onClick={handleDecreaseCounter}>
            Remover
          </button>
        </ButtonContainer>
      </Content>
      <Button onClick={handleSubmit}>Cadastrar</Button>
    </Container>
  );
};

export default CreateContact;
