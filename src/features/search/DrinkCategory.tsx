import { PropsWithChildren } from "react";
import styles from "./styles/DrinkCategory.module.css";

const DrinkCategory = ({ children }: PropsWithChildren) => {
  return <div className={styles.drinkCategory}>{children}</div>;
};
export default DrinkCategory;
