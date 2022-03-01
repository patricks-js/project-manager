import styled from 'styled-components';

export const Container = styled.fieldset`
    border: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: .5rem;
    label {
        font-weight: 500;
        font-size: 1.1rem;
    }
    input , select{
        width: 100%;
        padding: 0.625rem 0.9375rem;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, .2);
    }
`;
