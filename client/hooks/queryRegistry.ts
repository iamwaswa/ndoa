import { GiftRegistry } from 'types';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

export function useQueryRegistry(
  initialData: GiftRegistry
): [GiftRegistry, string | undefined, boolean] {
  const { data, error, isError, isLoading } = useQuery<
    GiftRegistry,
    Error | undefined,
    GiftRegistry
  >(
    `/api/get-updated-registry`,
    async ({ queryKey: [url] }): Promise<GiftRegistry> => {
      const response = await fetch(url);
      const { error, success } = await response.json();

      if (error) {
        console.error(error);
        throw new Error(error);
      }

      return success;
    },
    {
      initialData,
    }
  );

  return [data, isError ? error.message : undefined, isLoading];
}

export function useSuccess(): void {
  const router = useRouter();

  useEffect((): void => {
    if (router.query.success) {
      toast.success(`Your contribution was successful!`);
    }
  }, [router]);
}
