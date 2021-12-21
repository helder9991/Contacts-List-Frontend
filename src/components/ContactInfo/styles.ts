import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 6px;
    font-size: 16px;
    background-color: #F9FDFF;
    margin:  0 16px 16px;
    overflow-x: auto;

`;

export const FirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 25px;

    div {
        display: flex;
        margin: 15px 15px 0;
        font-weight: 400;

        h1 {
            margin: 0;
            margin-left: 6px;
            font-size: 16px;
        }
    }
`;

export const SecondRow = styled.div`
    display: flex;
    padding: 0 25px;

    div {
        margin: 5px 15px 15px;
        background-color: #76BB6B;
        border-radius: 4px;
        padding: 4px 6px;
        font-size: 14px;
        color: white;
    }
`;
