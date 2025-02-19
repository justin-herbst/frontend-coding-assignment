import { DrinkDetailsProps, DrinkDetailsResults } from "../useDrinkDetails";

let result: DrinkDetailsResults = {
  drinkDetails: {
    id: 1,
    name: "Test Drink",
    category: "Test Category",
    container: "Test Glass",
    instructions: "Test Instructions",
    ingredients: [
      {
        name: "Test Ingredient",
        measurement: "Test Measurement",
      },
    ],
    image: "http://example.com/test.jpg",
  },
  loading: false,
  error: "",
};
const useDrinkDetails = jest.fn((props: DrinkDetailsProps) => {
  return result;
});

export default useDrinkDetails;
