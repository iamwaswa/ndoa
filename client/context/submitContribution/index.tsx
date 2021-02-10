import { ChildrenProps, FunctionType } from 'types';
import { createContext, useContext, useState } from 'react';

interface ISubmitContributionContext {
  submitting: boolean;
  toggleSubmitting: FunctionType<[], void>;
}

const SubmitContributionContext = createContext<
  Partial<ISubmitContributionContext>
>({});

export function SubmitContributionContextProvider({
  children,
}: ChildrenProps): JSX.Element {
  const submitContribution = useSubmitContribution();

  return (
    <SubmitContributionContext.Provider value={submitContribution}>
      {children}
    </SubmitContributionContext.Provider>
  );
}

function useSubmitContribution(): ISubmitContributionContext {
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

export function useSubmitContributionContext(): ISubmitContributionContext {
  const { submitting, toggleSubmitting } = useContext(
    SubmitContributionContext
  );

  if (submitting === undefined || toggleSubmitting === undefined) {
    throw new Error(`SubmitContributionContext is used outside its provider!`);
  }

  return {
    submitting,
    toggleSubmitting,
  };
}
