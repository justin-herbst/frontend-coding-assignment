"use client";
import useDrinkDetails from "./hooks/useDrinkDetails";
import DrinkDetails from "./DrinkDetails";

type Props = { id: number };

const DrinkDetailsContainer = ({ id }: Props) => {
  const { drink, loading, error } = useDrinkDetails({ id });
  return <DrinkDetails drink={drink} loading={loading} error={error} />;
};

export default DrinkDetailsContainer;
