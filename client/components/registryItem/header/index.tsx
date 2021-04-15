/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemHeader, RegistryItemProgressMeter } from './styles';
import { useMemo } from 'react';
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
  
  const percentageContributed = useMemo(() => Math.min(contributedPercentage, 100), [contributedPercentage]);

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
            {`${percentageContributed % 10 === 0 ? percentageContributed : percentageContributed.toFixed(1)}% contributed${
              Math.min(100, percentageContributed) === 100 ? `!!!` : ``
            }`}
          </Typography>
        </RegistryItemProgressMeter>
      }
    />
  );
}
