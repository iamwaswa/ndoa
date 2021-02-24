import styled from 'styled-components';

export const RegistryItemContribute = styled.fieldset`
  ${({ theme }) => `
    border: none;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: ${theme.spacing(2)}px;
    margin: 0;
    padding: ${theme.spacing(0, 0, 4)};
  `}
`;
