import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 10%;
    padding: 20px 0;
    border: 0 solid #0f172a;    
    background: #0f172a;
    color: #ffaa00;
    font-size: 50px;
    font-weight: 700;
    flex: 1;
    
    &:hover {
        background-color: #050e24;
        opacity: 1;
        color: #ffaa00;
        border-radius: 50% 20% / 10% 40%;
    }

    @media (max-width: 600px) {
        font-size: 50px;
      }

    
`