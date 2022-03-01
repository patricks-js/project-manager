import styled from 'styled-components';

export const Container = styled.div`
  max-width: 60px;
  width: 100%;
  a {
      img {
          transition: .2s;
          &:hover {
              transform: translateY(-5px);
          }
      }
  }
`;
