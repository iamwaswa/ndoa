/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemHeader, RegistryItemProgressMeter } from './styles';

import { Item } from 'types/database';
import Typography from '@material-ui/core/Typography';
import { useContributedPercentage } from './hooks';

export function Header({
  contribution,
  name,
  goal,
}: Pick<Item, 'contribution' | 'name' | 'goal'>): JSX.Element {
  const contributedPercentage = useContributedPercentage({
    contribution,
    goal,
  });

  return (
    <RegistryItemHeader
      title={
        <section className="title">
          <Typography>{name}</Typography>
        </section>
      }
      subheader={
        <RegistryItemProgressMeter progress={contributedPercentage}>
          <Typography>
            {`${Math.min(contributedPercentage, 100)}% contributed${
              Math.min(contributedPercentage, 100) === 100 ? `!!!` : ``
            }`}
          </Typography>
        </RegistryItemProgressMeter>
      }
    />
  );
}
