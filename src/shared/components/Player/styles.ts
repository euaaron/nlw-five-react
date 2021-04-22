import styled from 'styled-components';

export const Container = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  
  max-width: 26.5rem;
  padding: 2rem 4rem 4rem;
  border-left: 1px solid var(--black);

  header {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  > div {
    width: 100%;
    height: 20rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background: var(--dark-gradient);
    border: 1px dashed var(--brightBlack);
    border-radius: 1rem;
    padding: 4rem;
  }

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }

  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    div:first-of-type {
      display: flex;
      width: 100%;
      align-items: center;
      gap: 1rem;
      font-size: 0.875rem;

      > div {
        flex: 1;
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background: var(--light-background);
      }
    }

    div:last-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;

      button {
        font-size: 0;        
        padding: .8rem;
        border: none;
        background-color: transparent;
      }

      button:nth-of-type(3) {
        background-color: var(--background);        
        border: 1px solid transparent;
      }
      
      button:nth-of-type(3):hover,
      button:nth-of-type(3):focus {
        background: linear-gradient(143.8deg, rgba(28, 30, 38, 0.6) 0%, rgba(40, 42, 54, 0) 100% );
        border: 1px solid var(--brightBlack);
      }
    }
  }  
`;
