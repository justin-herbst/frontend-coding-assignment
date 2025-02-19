export type Ingredient = {
  name: string;
  measurement: string;
};

export type Drink = {
  id: number;
  name: string;
  category: string;
  image: string;
};

export type DetailedDrink = {
  id: number;
  name: string;
  category: string;
  container: string;
  instructions: string;
  image: string;
  ingredients: Ingredient[];
};
