import styled from "styled-components";

export const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--dark-gradient);

  div:first-of-type {
    display: flex;
    position: relative;
    width: 100%;

    button {
      width: 6rem;
      line-height: 0;
      background: var(--dark-gradient);
      border: none;
      border-radius: 0;

      transition: filter 0.4s;

      &:hover,
      &:focus {
        filter: brightness(1.5) hue-rotate(95deg) saturate(5);
      }
    }

    button:last-of-type {
      background-color: var(--green);
      transition: background-color 0.4s;
      
      height: 4rem;
      width: 4rem;

      position: absolute;
      bottom: 1rem;
      right: 1rem;

      z-index: 5;

      &:hover,
      &:focus {
        filter: brightness(1.5) hue-rotate(0deg) saturate(.8);
      }
    }

  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 2rem 6rem 0;
  padding-bottom: 2rem;
  gap: .5rem;

  border-bottom: 1px solid var(--darkBlack);

  h1 {
    color: var(--blue);
  }

  div {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;

    span {
      color: var(--brightBlack);

      &+ span::before {
      content:"●";
      padding-right: 1rem;
    }
    }
  }
`;

export const Body = styled.footer`
  padding: 2rem 6rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: justify;

  color: var(--brightBlack);
`;
