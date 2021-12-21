import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #EEEDED;
    width: 25vw;
    height: 75vh;
    padding: 20px 0;

    @media(max-width: 1000px) {
        margin: 35px;
        padding: 20px 15%;
        width: 70vw;
    }
`;

export const Content = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: 20px;

    @media(max-width: 1000px) {
        width: 80%;
    }
`;

export const Title = styled.h1`
    font-size: 22px;
    margin: 0;
    width: 80%;
    text-align: center;

    @media(max-width: 1200px) {
        font-size: 18px;
    }

    @media(max-width: 1200px) {
        font-size: 22px;
    }
`;
