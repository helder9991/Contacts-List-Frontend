import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DDDDDD;
    padding: 10px;
    margin: 6px;
    width: 80%;

    input {
        background: none;
        border: none;
        height: 25px;
        width: 90%;

        &:focus {
            outline-width: 0;
        }
    }
`;
