import { useMemo } from 'react';

interface IUseRegistryItemArgs {
  contributed: number;
  price: number;
}

export function useRegistryItem({
  contributed,
  price,
}: IUseRegistryItemArgs): number {
  const purchasedPercentage = useMemo<number>(() => {
    return Math.min((contributed / price) * 100, 100);
  }, [contributed, price]);

  return purchasedPercentage;
}
