import { FunctionType } from 'types';
import { useState } from 'react';

interface IUseSubmitContribution {
  submitting: boolean;
  toggleSubmitting: FunctionType<[], void>;
}

export function useSubmitContribution(): IUseSubmitContribution {
  const [submitting, setSubmitting] = useState<boolean>(false);

  function toggleSubmitting(): void {
    setSubmitting(
      (currentlySubmitting: boolean): boolean => !currentlySubmitting
    );
  }

  return {
    submitting,
    toggleSubmitting,
  };
}
