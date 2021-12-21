import React from 'react';
import { Container } from './styles';

interface IProps {
    onClick: () => void;
    children: React.ReactNode
}

const Button: React.FC<IProps> = ({ onClick, children }) => (
  <Container onClick={onClick}>
    {children}
  </Container>
);

export default Button;
