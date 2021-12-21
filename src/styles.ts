import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #E0DCDC;
    width: 100vw;
    height: 100vh;
    
    @media(max-width: 1000px) {
        flex-direction: column;
        height: auto;
    }
`;
