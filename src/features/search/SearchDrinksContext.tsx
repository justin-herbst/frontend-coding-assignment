"use client";
import React, { PropsWithChildren, use, useContext, useState } from "react";
import { Drink } from "./types";
import useSearchDrinks from "./hooks/useSearchDrinks";

export type SearchDrinksContextType = {
  query: string;
  limit: number;
  page: number;
  total: number;
  loading: boolean;
  error: string;
  drinks: Drink[];
  setQuery: (arg0: string) => void;
  setPage: (arg0: number) => void;
  setLimit: (arg0: number) => void;
};

const emptySearchDrinksContext: SearchDrinksContextType = {
  query: "",
  limit: 6,
  page: 1,
  total: 0,
  loading: false,
  error: "",
  drinks: [],
  setQuery: () => {},
  setPage: () => {},
  setLimit: () => {},
};

const SearchDrinksContext = React.createContext<SearchDrinksContextType>(
  emptySearchDrinksContext
);

export const useSearchDrinksContext = () => {
  return useContext(SearchDrinksContext);
};

type SearchDrinksProviderProps = PropsWithChildren & {
  query?: string;
  limit?: number;
  page?: number;
  drinks?: Drink[];
  total?: number;
};
export const SearchDrinksContextProvider = ({
  query: initialQuery = "",
  limit: initialLimit = 6,
  page: initialPage = 1,
  drinks: initialDrinks = [],
  total: initialTotal = 0,
  children,
}: SearchDrinksProviderProps) => {
  const [query, setQuery] = useState<string>(initialQuery);
  const [limit, setLimit] = useState(initialLimit);
  const [page, setPage] = useState(initialPage);

  const { drinks, total, loading, error } = useSearchDrinks({
    query: query,
    limit: limit,
    page: page,
  });

  const data: SearchDrinksContextType = {
    query,
    limit,
    page,
    loading,
    error,
    drinks,
    total,
    setQuery,
    setPage,
    setLimit,
  };

  return (
    <SearchDrinksContext.Provider value={data}>
      {children}
    </SearchDrinksContext.Provider>
  );
};
