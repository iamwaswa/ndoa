import styled, { css } from 'styled-components';

export const AnchorStyles = css`
  color: var(--light-blue);
  cursor: pointer;
  position: relative;

  &:hover {
    color: #ffffff;
  }

  &:focus {
    color: #ffffff;
    outline: none;
  }
`;

export const Anchor = styled.a`
  ${AnchorStyles};
`;
