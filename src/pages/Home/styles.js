import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 2.3rem;
         span {
            display: inline-block;
            padding: 2px;
            background-color: #333;
            color: var(--color-alt);
         }
    }
    
`;
