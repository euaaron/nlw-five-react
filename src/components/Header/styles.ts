import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  width: 100%;
  height: 6.5rem;

  padding: 2rem 4rem;
  border-bottom: 1px solid var(--black);

  p {
    display: flex;
    flex: 1;
    padding: 0 0 0 2rem;
    border-left: 1px solid var(--black);
  }

  span {
    text-transform: capitalize;  
  }

  @media (max-width: 720px) {
    flex-direction: column;
    height: auto;
    padding: 2rem;
    gap: .5rem;
    
    p {
      flex: 0;
      text-align: center;
      border-left: none;
      border-bottom: 1px solid var(--black);
      padding: 0 1rem .5rem;
    }
  }
`;
