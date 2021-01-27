import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  width: 100%;
  height: 36px;

  border: 0px;
  background: ${({ theme }) => theme.colors.button.active};
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 16px;
  text-transform: uppercase;

  border-radius: 4px;
  margin-top: 25px;
  &:disabled {
    background: ${({ theme }) => theme.colors.button.disabled};
  }
  &:not(:disabled) {
    cursor: pointer;
  }
`;

export default Button;
