import styled, { css } from 'styled-components';

export const AnchorStyles = css`
  color: var(--light-blue);
  cursor: pointer;
  position: relative;

  &:hover {
    color: var(--light-blue);
  }

  &:after {
    content: '';
    border-bottom: 3px solid var(--light-blue);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 300ms ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &:focus:after {
    opacity: 1;
    transform: translateX(0);
  }

  &:hover:after {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Anchor = styled.a`
  ${AnchorStyles};
`;
