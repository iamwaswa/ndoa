import { useMemo } from 'react';

interface IUseRegistryItemArgs {
  contribution: number;
  price: number;
}

export function useRegistryItem({
  contribution,
  price,
}: IUseRegistryItemArgs): number {
  const purchasedPercentage = useMemo<number>(() => {
    return Math.min((contribution / price) * 100, 100);
  }, [contribution, price]);

  return purchasedPercentage;
}
