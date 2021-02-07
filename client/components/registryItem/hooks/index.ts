import { Item } from 'types/database';
import { useMemo } from 'react';

export function useRegistryItem({
  contribution,
  price,
}: Pick<Item, 'contribution' | 'price'>): number {
  const purchasedPercentage = useMemo<number>(() => {
    return price === undefined
      ? 0
      : Math.min((contribution / price) * 100, 100);
  }, [contribution, price]);

  return purchasedPercentage;
}
