import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    background-color: #000000c6;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 70%;
    background-color: white;
    padding: 0 4%;

    h1 {
        text-align: center;
        font-size: 28px;
        flex: 1;
        border-bottom: 1px solid #c4c4c4;
    }
`;

export const Center = styled.div`
    flex: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #c4c4c4;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 2;
    margin-top: 20px;

    button {
        width: 35%;
        height: 35%;
    }
`;
