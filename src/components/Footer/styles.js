import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: var(--header-height);
  background-color: #333;
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: .4rem;
      color: var(--color-text);
      .heart {
          color: tomato;
      }
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  li {
    a {
      font-size: 1.4rem;
      color: var(--color-text);
      display: inline-block;
      transition: 0.3s;
      &:hover {
        transform: translateY(-5px) scale(1.2);
      }
    }
  }
`;
