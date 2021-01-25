import styled from 'styled-components';

const BaseAnchor = styled.a`
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;

    opacity: 0;
    transition: all 300ms ease-in-out;
  }

  &:hover:after {
    opacity: 1;
  }
`;

export const FlatAnchor = styled(BaseAnchor)`
  &:after {
    background-color: #ffffff;
    bottom: -2px;
    left: 0;
    right: 0;
    padding: 1px;

    transform: translateX(-10px);
  }

  &:hover:after {
    transform: translateX(0);
  }
`;

export const CircularAnchor = styled.a`
  &:after {
    border: 1px solid #ffffff;
    border-radius: 50%;
    top: -1px;
    bottom: 4px;
    left: -1px;
    right: 0;

    transform-origin: center center;
    transform: scale(1.1);
  }

  &:hover:after {
    transform: scale(1);
  }
`;