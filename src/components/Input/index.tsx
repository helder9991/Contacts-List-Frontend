import React, { InputHTMLAttributes, forwardRef, useCallback } from 'react';
import { Container } from './styles';

type IProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  type: 'number' | 'text' | 'phone';
}

const Input = forwardRef<HTMLInputElement, IProps>(({ placeholder, type }, inputRef: any) => {
  const handleMaskInput = useCallback(() => {
    if (inputRef && type === 'phone') {
      let mask = inputRef.current.value;

      // Verifica se o usuario deu autocomplete
      if (
        Number.isInteger(parseInt(mask, 10))
        && (mask.length === 10 || mask.length === 11)
      ) {
        if (mask.length === 10) {
          inputRef.current.value = `(${mask.substring(0, 2)})${mask.substring(
            2,
            6,
          )}-${mask.substring(6, 10)}`;
        } else if (mask.length === 11) {
          inputRef.current.value = `(${mask.substring(0, 2)})${mask.substring(
            2,
            7,
          )}-${mask.substring(7, 11)}`;
        }
        return;
      }

      // Nao permite digitar letras ou simbolos ou mais de 14 numeros
      if (
        !Number.isInteger(Number.parseInt(mask[mask.length - 1], 10))
        || mask.length >= 15
      ) {
        inputRef.current.value = mask.slice(0, mask.length - 1);
        return;
      }

      switch (mask.length) {
        case 1: // Adiciona o '('
          inputRef.current.value = String().concat('(', mask);
          break;

        case 4: // Adiciona o ')'
          inputRef.current.value = String().concat(
            mask.slice(0, mask.length - 1),
            ')',
            mask[mask.length - 1],
          );
          break;

        case 9: // Adiciona o '-'
          inputRef.current.value = String().concat(
            mask.substring(0, 8),
            '-',
            mask.substring(9, mask.length - 1),
          );
          break;

        case 14: // Caso o numero do telefone tenha 14 digitos
          inputRef.current.value = String().concat(
            mask.substring(0, 10).replace('-', ''),
            '-',
            mask.substring(10, mask.length),
          );
          break;

        default:
          // Caso o numero do telefone va de 14 digitos para 13 digitos
          if (mask.length > 9 && mask.length < 14 && mask[9] === '-') {
            mask = mask.replace('-', '');
            inputRef.current.value = String().concat(
              mask.substring(0, 8),
              '-',
              mask.substring(8, mask.length),
            );
          }
      }
    }
  }, [inputRef, type]);

  return (
    <Container>
      <input
        type={type}
        onChange={handleMaskInput}
        placeholder={placeholder}
        ref={inputRef}
      />
    </Container>
  );
});

export default Input;
