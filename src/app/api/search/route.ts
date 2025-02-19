import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import data from "@/data/cocktail_recipes.json";
import { Drink, DetailedDrink } from "@/features/search/types";

export function GET(req: NextApiRequest) {
  const {
    query = "",
    index = "0",
    limit = "6",
  } = Object.fromEntries(new URL(req.url as string).searchParams);
  const i = parseInt(index as string, 10);
  const l = parseInt(limit as string, 10);
  const drinkData = (data as DetailedDrink[]).map(
    (drink: DetailedDrink, i: number): DetailedDrink => {
      return { ...drink, id: i + 1 };
    }
  );
  const filteredData: Drink[] = drinkData
    .filter((drink: DetailedDrink): boolean => {
      return drink.name.toLowerCase().includes((query as string).toLowerCase());
    })
    .map((drink: DetailedDrink): Drink => {
      return {
        id: drink.id,
        name: drink.name,
        category: drink.category,
        image: drink.image,
      };
    });
  const start = Math.min(i, filteredData.length);
  const end = Math.min(i + l, filteredData.length);
  const drinks = filteredData.slice(start, end);
  const result = {
    drinks,
    total: filteredData.length,
  };
  return NextResponse.json(result);
}
