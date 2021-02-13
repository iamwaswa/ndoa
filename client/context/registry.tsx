import { ChildrenProps, FunctionType, GiftRegistry } from 'types';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { sessionStorageKey } from '@constants';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

interface IRegistryContext {
  gifts: GiftRegistry;
  refreshing: boolean;
  fetchData: FunctionType<void, void>;
  updateGifts: Dispatch<SetStateAction<GiftRegistry>>;
}

const RegistryContext = createContext<Partial<IRegistryContext>>({});

export function RegistryContextProvider({
  children,
}: ChildrenProps): JSX.Element {
  const registry = useRegistry();

  return (
    <RegistryContext.Provider value={registry}>
      {children}
    </RegistryContext.Provider>
  );
}

function useRegistry(initialGifts: GiftRegistry = []): IRegistryContext {
  const [gifts, setGifts] = useState<GiftRegistry>(initialGifts);

  const [refreshData, setRefreshData] = useState<boolean>(false);

  const [refreshing, setRefreshing] = useState<boolean>(true);

  useSuccess();

  useEffect((): FunctionType<void, void> => {
    function onFocus(): void {
      const clickedBuy = sessionStorage.getItem(sessionStorageKey);

      if (clickedBuy !== null) {
        console.log(`Refreshing data...`);
        setRefreshData(true);
        sessionStorage.removeItem(sessionStorageKey);
      }
    }

    window.addEventListener(`focus`, onFocus);
    window.addEventListener(`focusin`, onFocus);

    return (): void => {
      window.removeEventListener(`focus`, onFocus);
      window.removeEventListener(`focusin`, onFocus);
    };
  }, []);

  useEffect((): void => {
    if (refreshData) {
      setRefreshing(true);

      fetch(`/api/get-registry`)
        .then((response) => response.json())
        .then((data: { success: GiftRegistry }): void => {
          setGifts(data.success);
        })
        .finally((): void => {
          setRefreshData(false);
          setRefreshing(false);
        });
    }
  }, [refreshData]);

  const fetchData = useCallback((): void => {
    setRefreshData(true);
  }, []);

  return {
    gifts,
    refreshing,
    fetchData,
    updateGifts: setGifts,
  };
}

function useSuccess(): void {
  const router = useRouter();

  useEffect((): void => {
    if (router.query.success) {
      toast.success(`Your contribution was successful!`);
    }
  }, [router]);
}

export function useRegistryContext(
  initialGifts: GiftRegistry
): IRegistryContext {
  const { gifts, refreshing, fetchData, updateGifts } = useContext(
    RegistryContext
  );

  if (
    gifts === undefined ||
    refreshing === undefined ||
    fetchData === undefined ||
    updateGifts === undefined
  ) {
    throw new Error(`RegistryContext is used outside its provider!`);
  }

  useEffect((): void => {
    if (initialGifts) {
      updateGifts(initialGifts);
    }
  }, [initialGifts, updateGifts]);

  return {
    gifts,
    refreshing,
    fetchData,
    updateGifts,
  };
}
