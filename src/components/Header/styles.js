import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 90px;
  background-color: var(--color-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav``;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  li {
    a {
      color: var(--color-text);
      transition: .3s;
      &:hover {
          color: #ffbb33;
      }
    }
  }
`;
