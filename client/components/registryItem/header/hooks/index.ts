import { useMemo } from 'react';

interface IUseContributedPercentageArgs {
  contribution?: number;
  goal: number;
}

export function useContributedPercentage({
  contribution = 0,
  goal,
}: IUseContributedPercentageArgs): number {
  const purchasedPercentage = useMemo<number>(() => {
    return Math.min((contribution / goal) * 100, 100);
  }, [contribution, goal]);

  return purchasedPercentage;
}
