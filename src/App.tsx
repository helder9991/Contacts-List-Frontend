import React from 'react';
import Contacts from './components/Contacts';
import CreateContact from './components/CreateContact';
import './global.css';

import { Container } from './styles';

const App = () => (
  <Container>
    <CreateContact />
    <Contacts />
  </Container>
);

export default App;
