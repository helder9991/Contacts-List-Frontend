import React, { useState, useRef, useEffect } from 'react';
import { api } from '../../services/api';
import Button from '../Button';
import ContactInfo from '../ContactInfo';
import Input from '../Input';
import {
  Container, Content, Title, Filters, List, Error,
} from './styles';

interface IContacts {
    id: number,
    name: string,
    yearsOld: number,
    phones: [
      {
        id: number,
        idContact: number,
        number: string
      }
    ]
}

interface IUpdateContact {
  id: number;
  name: string;
  yearsOld: number;
  phoneNumbers: Array<
    {
      id: number,
      idContact: number,
      number: string
    }
  >
}

const Contacts = () => {
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [selectedRadio, setSelectedRadio] = useState('name');
  const [listContacts, setListContacts] = useState<IContacts[]>([]);
  const [contact, setContact] = useState<IContacts>();

  const handleSearch = async () => {
    if (selectedRadio === 'name') {
      const { data } = await api.get('/contacts', {
        params: {
          name: nameInputRef?.current?.value,
        },
      });

      setListContacts(data);
    } else {
      const { data } = await api.get('/contact', {
        params: {
          phoneNumber: phoneInputRef?.current?.value,
        },
      });
      setContact(data);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleChangeRadio = (value: string) => {
    setSelectedRadio(value);
    if (phoneInputRef?.current) phoneInputRef.current.value = '';
    if (nameInputRef?.current) nameInputRef.current.value = '';
  };

  const handleEdit = async (data: IUpdateContact) => {
    const response = await api.put(`/contact/${data.id}`, data);
    if (response.status === 200) alert('Contato alterado com sucesso');
    await handleSearch();
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm('Deseja realmente apagar este contato?');

    if (confirmDelete) {
      await api.delete(`/contact/${id}`);
      await handleSearch();
    }
  };

  return (
    <Container>

      <Title>Lista de contatos</Title>
      <Content>
        <Filters>
          <div>
            <div>
              <h1>Busca</h1>
              <label htmlFor="name">
                <input
                  type="radio"
                  name="search"
                  id="name"
                  onClick={() => handleChangeRadio('name')}
                  checked={selectedRadio === 'name'}
                />
                Procurar por nome
              </label>
            </div>
            <div>

              <label htmlFor="phone">
                <input
                  type="radio"
                  name="search"
                  id="phone"
                  onClick={() => handleChangeRadio('phone')}
                  checked={selectedRadio === 'phone'}
                />
                Procurar por telefone
              </label>
            </div>
          </div>
          {
            selectedRadio === 'name' ? (
              <Input placeholder="Digite o nome" type="text" ref={nameInputRef} />
            ) : (
              <Input type="phone" placeholder="Digite o telefone" ref={phoneInputRef} />
            )
          }

          <Button onClick={() => handleSearch()}>Buscar</Button>
        </Filters>
        <List>
          {
            selectedRadio === 'name' && (
              listContacts.length > 0 ? (
                listContacts.map((contactValue) => (
                  <ContactInfo
                    key={contactValue.id}
                    contact={contactValue}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ))
              ) : (
                <Error>Nenhum contato encontrado</Error>
              )
            )
          }
          {
            selectedRadio === 'phone' && (
              contact ? (
                <ContactInfo
                  key={contact.id}
                  contact={contact}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ) : (
                <Error>Nenhum contato encontrado</Error>
              ))
          }
        </List>
      </Content>
    </Container>
  );
};

export default Contacts;
