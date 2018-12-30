import styled from 'styled-components'

const Button = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 40px;
  border-radius: 50px;
  border: 2px solid ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.primary};
  font-size: 1em;
  font-weight: ${({theme})=>theme.font.bold};
  transition: box-shadow .3s ease;
  ${({theme})=>theme.media.mobile}{
      background: ${({theme})=>theme.colors.white}
    };
  :hover {
    box-shadow: -5px 10px 20px -15px ${({theme})=>theme.colors.white};
  };

 
`;

export default Button;