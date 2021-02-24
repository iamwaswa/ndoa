import { showedWelcomeCardKey } from '@constants';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

export function useWelcomeCardName(): string {
  const { query } = useRouter();

  return useMemo((): string => {
    if (
      typeof window !== undefined &&
      localStorage.getItem(showedWelcomeCardKey)
    ) {
      return ``;
    }

    if (query.name && isString(query.name)) {
      return query.name.replace(/_/g, ` `);
    }

    return ``;
  }, [query]);
}

function isString(value: unknown): value is string {
  return (value as string).toLowerCase !== undefined;
}
