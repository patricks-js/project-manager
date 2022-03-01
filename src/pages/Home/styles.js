import styled from "styled-components";

export const Container = styled.main`
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
    color: #80807e;
  }
  button {
    background-color: var(--color-secondary);
    color: var(--color-text);
    font: normal normal var(--font-primary) 1.5rem;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    transition: .2s;
    &:hover {
        color: var(--color-alt);
        transform: scale(1.1);
    }
  }
  img {
      max-width: 400px;
      width: 100%;
  }
`;
