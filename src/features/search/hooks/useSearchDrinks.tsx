"use client";
import { useEffect, useState } from "react";
import { Drink } from "../types";

type Props = {
  query?: string;
  page?: number;
  limit?: number;
};

export type SearchDrinkResults = {
  drinks: Drink[];
  total: number;
  loading: boolean;
  error: boolean;
};

type ResponseData = {
  drinks: Drink[];
  total: number;
};

const search = async ({
  index,
  limit,
  query,
}: {
  index: number;
  limit: number;
  query: string;
}) => {
  const response = await fetch(
    `http://localhost:3000/api/search?index=${index}&limit=${limit}&query=${query}`
  );
  const data = await response.json();
  return data;
};

const useSearchDrinks = ({ query = "", page = 1, limit = 6 }: Props) => {
  const [responseData, setResponseData] = useState<ResponseData>({
    total: 0,
    drinks: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const index = (page - 1) * limit;

  const searchDrinks = async () => {
    setLoading(true);
    try {
      const { drinks, total } = await search({ index, limit, query });
      setResponseData({ drinks, total });
    } catch (error: any) {
      let e: string = error.message || "an error occurred";
      setError(e);
      setResponseData({ drinks: [], total: 0 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchDrinks();
  }, [index, limit, query]);

  return {
    drinks: responseData.drinks,
    total: responseData.total,
    loading,
    error,
  };
};

export default useSearchDrinks;
