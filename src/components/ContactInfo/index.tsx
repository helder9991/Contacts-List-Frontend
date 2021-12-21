import React from 'react';

import { Container, FirstRow, SecondRow } from './styles';

interface IProps {
    contact: {
        name: string;
        yearsOld: number;
        phones: [
            {
              id: number,
              idContact: number,
              number: string
            }
          ]
    }
}

const ContactInfo = ({ contact: { name, yearsOld, phones } } : IProps) => (
  <Container>
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
  </Container>
);

export default ContactInfo;
