import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAAAFF;
    overflow: hidden;
    border-radius: 10px 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
    font-family: 'Fira Code';
    

    input {
        width: 100%;
        height: 75px;
        background-color: #ffaa00;
        border-width: 2px 0;
        border-top-color: #ffaa00;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 55px;
        font-weight: 700;
        font-family: 'Fira Code';
        color: #050e24;
    }
`