import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0F172A;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`    
    background-color: #0F172A;
    width: 400px;
    box-shadow: 0px 0px 25px 20px #010717;      
    
    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Fira Code';
        font-size: 14px;
        color: #ffaa00;
        padding: 10px 0;
    }

    .header h1{
        margin: 0 10px 0 10px;
    }

    img{
        width: 10%;
   }
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

