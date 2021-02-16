import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function useRegistryContributionSuccess(): void {
  const router = useRouter();

  useEffect((): void => {
    if (router.query.success) {
      toast.success(`Your contribution was successful!`);
    }
  }, [router]);
}
