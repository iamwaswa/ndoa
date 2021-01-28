import { useMemo, useState } from 'react';

export function useRegistryItem({ contributed, price }) {
  const [showContributionLeft, setShowContributionLeft] = useState(false);

  const contributionLeft = useMemo(() => {
    const amountLeft = Math.max(price - contributed, 0);
    return `$${amountLeft} left${amountLeft === 0 ? `!!!` : ``}`;
  }, [contributed, price]);

  const purchasedPercentage = useMemo(() => {
    return Math.min((contributed / price) * 100, 100);
  }, [contributed, price]);

  function toggleShowContributionLeft(state) {
    return () => {
      setShowContributionLeft((currentlyShowing) => {
        if (state === undefined) {
          return !currentlyShowing;
        }
        return state;
      });
    };
  }

  return {
    contributionLeft,
    purchasedPercentage,
    showContributionLeft,
    toggleShowContributionLeft,
  };
}
