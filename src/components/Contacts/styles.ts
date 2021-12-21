import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #EEEDED;
    width: 65vw;
    height: 75vh;

    @media(max-width: 1000px) {
        margin: 0 35px 35px;
        width: 90vw;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
    flex: 1;

`;

export const Title = styled.h1`
    font-size: 22px;
    margin-top: 25px;
    margin-block-end: 0;

`;

export const Filters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    width: 400px;
    height: 90%;
    border-right: 1px solid #CDCDCD;

    h1 {
        font-size: 22px;
        margin-block-end: 0;
        margin: 0 0 10px 0;
        text-align: center;
        width: 100%;
    }

    div {
        margin-bottom: 15px;
    }
`;

export const List = styled.div`
    width: 100%;
    height: 90%;
    max-height: 90%;
    overflow-y: auto;
`;

export const Error = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 45px;
`;
