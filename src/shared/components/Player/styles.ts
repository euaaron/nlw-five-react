import styled from "styled-components";

export interface ActivityProps {
  isActive?: boolean;
  isPlaying?: boolean;
}

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

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  p {
    padding: 1rem 2rem;
  }
`;

export const Idle = styled.div`
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
`;

export const Playing = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  strong {
    font: 600 1.25rem Lexend, sans-serif;
    line-height: 1.75rem;
  }

  span {
    opacity: 0.6;
    line-height: 1.5rem;
    color: var(--brightBlack);
  }

  img {
    border: 1px dashed var(--brightBlack);
    border-radius: 1rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  span {
    display: flex;
    min-width: 4.2rem;
  }
`;

export const Progress = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
`;

export const EmptySlider = styled.div`
  flex: 1;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: var(--light-background);
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Button = styled.button<ActivityProps>`
  font-size: 0;
  border: 0;
  background-color: transparent;
  transition: filter 0.4s;
  padding: .8rem;

  filter: ${(props) => (props.isActive) 
        ? "invert(0.35) sepia(1) saturate(3) hue-rotate(100deg)"
        : "none"};

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  &:hover{
    &:not(:disabled) {
      filter: brightness(0.7);
    }
  }
`;

export const PlayPause = styled.button<ActivityProps>`
  width: 4rem;
  height: 4rem;
  border: 1px solid transparent;
  background-color: transparent;
  font-size: 0;
  line-height: 0;

  &:hover {
    &:not(:disabled) {
      background: linear-gradient(
        143.8deg,
        rgba(28, 30, 38, 0.6) 0%,
        rgba(40, 42, 54, 0) 100%
      );
      border: 1px solid var(--brightBlack);
      filter: brightness(0.95);
    }
  }

  &:disabled {
    background: transparent;
    border: 1px solid var(--default-background);
    filter: brightness(0.7);
  }
`;
