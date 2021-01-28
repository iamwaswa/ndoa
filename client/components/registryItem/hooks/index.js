import { useMemo } from 'react';

export function useRegistryItem({ contributed, price }) {
  const purchasedPercentage = useMemo(() => {
    return Math.min((contributed / price) * 100, 100);
  }, [contributed, price]);

  return purchasedPercentage;
}
