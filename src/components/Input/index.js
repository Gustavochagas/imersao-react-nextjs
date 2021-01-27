import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;

  background: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: 3.5px;
`;

export default Input;
