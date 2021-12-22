import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';

import {
  Container, FirstRow, SecondRow, Actions, Content,
} from './styles';
import Modal from '../Modal';
import Input from '../Input';

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
interface IProps {
    contact: {
      id: number;
      name: string;
      yearsOld: number;
      phones: Array<
        {
          id: number,
          idContact: number,
          number: string
        }
      >
    },
    handleDelete: (id: number) => Promise<void>,
    handleEdit: (data: IUpdateContact) => Promise<void>,
}

const ContactInfo = ({
  contact: {
    id, name, yearsOld, phones,
  },
  handleEdit,
  handleDelete,
} : IProps) => {
  const yearsOldRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phone1Ref = useRef<HTMLInputElement>(null);
  const phone2Ref = useRef<HTMLInputElement>(null);
  const phone3Ref = useRef<HTMLInputElement>(null);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (nameRef && nameRef.current) { nameRef.current.value = name; }
    if (yearsOldRef && yearsOldRef.current) { yearsOldRef.current.value = String(yearsOld); }
    if (phone1Ref && phone1Ref.current) { phone1Ref.current.value = phones[0].number; }
    if (phone2Ref && phone2Ref.current && phones[1]) phone2Ref.current.value = phones[1].number;
    if (phone3Ref && phone3Ref.current && phones[2]) phone3Ref.current.value = phones[2].number;
  }, [showModal]);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleUpdate = async () => {
    await handleEdit({
      id,
      yearsOld: Number(yearsOldRef.current?.value) || -1,
      name: nameRef.current?.value || '',
      phoneNumbers: [
        {
          ...phones[0],
          number: phone1Ref.current?.value || '',
        },
        {
          ...phones[1],
          number: phone2Ref.current?.value || '',
        },
        {
          ...phones[2],
          number: phone3Ref.current?.value || '',
        },
      ],
    });
  };

  return (
    <Container>
      {
        showModal && (
          <Modal
            title="Alterar contato"
            buttons={[
              {
                text: 'Alterar',
                onClick: () => handleUpdate(),
              },
              {
                text: 'Fechar',
                onClick: () => setShowModal(false),
              },
            ]}
          >
            <Input type="text" placeholder="Nome" ref={nameRef} />
            <Input type="number" placeholder="Idade" ref={yearsOldRef} />

            <Input type="phone" placeholder="Telefone 1" ref={phone1Ref} />
            {
              phones[1] && (
                <Input type="phone" placeholder="Telefone 2" ref={phone2Ref} />

              )
            }
            {
              phones[2] && (
                <Input type="phone" placeholder="Telefone 3" ref={phone3Ref} />

              )
            }
          </Modal>
        )
      }
      <Content>
        <FirstRow>
          <div>
            <span>Nome: </span>
            <h1>{name}</h1>
          </div>
          <div>
            <span>Idade: </span>
            <h1>{yearsOld}</h1>
          </div>

        </FirstRow>
        <SecondRow>
          {
              phones.map((phone) => (
                <div key={phone.id}>
                  { phone.number}
                </div>

              ))
              }
        </SecondRow>
      </Content>

      <Actions>
        <button type="button" onClick={() => handleShowModal()}>
          <FontAwesomeIcon icon={faPen} color="grey" />
        </button>
        <button type="button" onClick={() => handleDelete(id)}>
          <FontAwesomeIcon icon={faTrash} color="red" />
        </button>
      </Actions>
    </Container>
  );
};

export default ContactInfo;
