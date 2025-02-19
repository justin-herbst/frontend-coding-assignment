import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import data from "@/data/cocktail_recipes.json";
import { DetailedDrink } from "@/features/search/types";

export async function GET(req: NextApiRequest) {
  const { id: idQ } = Object.fromEntries(
    new URL(req.url as string).searchParams
  );
  const id = parseInt(idQ as string, 10);

  const drinkData = (data as DetailedDrink[]).map(
    (drink: DetailedDrink, i: number): DetailedDrink => {
      return { ...drink, id: i + 1 };
    }
  );
  const filteredData: DetailedDrink[] = drinkData.filter(
    (drink: DetailedDrink): boolean => {
      return drink.id === id;
    }
  );

  const result = filteredData.length ? filteredData[0] : null;
  if (result === null) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  } else {
    return NextResponse.json(result);
  }
}
