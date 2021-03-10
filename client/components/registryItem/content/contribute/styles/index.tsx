import styled, { css } from 'styled-components';

export const RegistryItemContribute = styled.fieldset`
  ${({ theme }) => css`
    border: none;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: ${theme.spacing(2)}px;
    margin: 0;
    padding: ${theme.spacing(0, 0, 4)};
  `}
`;

export const StyledLabel = styled.label`
  color: var(--dark-blue);
  font-size: 16px;
`;

const InputBaseStyles = css`
  background: transparent;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 2px -1px #000000;
  color: var(--dark-blue);
  font-size: 16px;
  padding: 8px;
`;

export const StyledInput = styled.input`
  ${InputBaseStyles}
`;

export const StyledSelect = styled.select`
  ${InputBaseStyles}
`;
