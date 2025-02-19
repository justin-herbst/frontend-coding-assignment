"use client";
import { useEffect, useState } from "react";
import { DetailedDrink } from "../types";

export type DrinkDetailsProps = {
  id: number;
};

export type DrinkDetailsResults = {
  drinkDetails: DetailedDrink;
  loading: boolean;
  error: string;
};

const getDrinkDetails = async ({ id }: DrinkDetailsProps) => {
  const response = await fetch(`http://localhost:3000/api/details?id=${id}`);
  const data = await response.json();
  return data;
};

const useDrinkDetails = ({ id }: DrinkDetailsProps) => {
  const [drinkDetails, setDrinkDetails] = useState<DetailedDrink | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const searchDrinks = async () => {
    setLoading(true);
    try {
      const drinkDetails = await getDrinkDetails({ id });
      setDrinkDetails(drinkDetails);
    } catch (error: any) {
      let e: string = error.message || "an error occurred";
      setError(e);
      setDrinkDetails(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchDrinks();
  }, [id]);

  return {
    drink: drinkDetails,
    loading,
    error,
  };
};

export default useDrinkDetails;
