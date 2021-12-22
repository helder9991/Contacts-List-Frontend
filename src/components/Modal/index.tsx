import React from 'react';
import {
  Center, Container, Content, Buttons,
} from './styles';

interface IButtonProps {
    text: string,
    onClick: () => void,
}

interface IProps {
    title: string;
    buttons: [IButtonProps, IButtonProps],
    children: React.ReactNode
}

const Modal: React.FC<IProps> = ({ children, title, buttons }) => (
  <Container>
    <Content>
      <h1>{title}</h1>
      <Center>
        {children}
      </Center>
      <Buttons>
        <button type="button" onClick={() => buttons[0].onClick()}>
          {buttons[0].text}
        </button>
        <button type="button" onClick={() => buttons[1].onClick()}>
          {buttons[1].text}
        </button>
      </Buttons>
    </Content>
  </Container>
);

export default Modal;
