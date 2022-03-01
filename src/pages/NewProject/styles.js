import styled from "styled-components";

export const Container = styled.main`
  div {
    width: 28.125rem;
    margin: 0 auto;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.3rem;
    p {
      color: var(--color-text-secondary);
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
    gap: 1.3rem;
        margin: 15px 0;
    }
  }
`;
