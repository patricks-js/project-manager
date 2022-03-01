import styled from "styled-components";

export const Container = styled.main`
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    h1 {
      font-size: 2.3rem;
      span {
        display: inline-block;
        padding: 2px 5px;
        background-color: var(--color-secondary);
        border-radius: 10px;
        color: var(--color-alt);
      }
    }
    p {
      color: var(--color-text-secondary);
    }
    img {
      max-width: 400px;
      width: 100%;
    }
  }
`;
