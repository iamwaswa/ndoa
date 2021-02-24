import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const RegistryItemContainer = styled(Card)`
  ${({ theme }) => `
    color: var(--dark-blue);
    background-color: var(--gold);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 300px;
    padding: ${theme.spacing()}px;

    & .item {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
  `}
`;
