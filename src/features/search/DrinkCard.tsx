import Link from "next/link";
import styles from "./styles/DrinkCard.module.css";
import { Drink } from "./types";
import DrinkCategory from "./DrinkCategory";

const DrinkCard = ({ drink }: { drink: Drink }) => {
  const slug = encodeURIComponent(drink.name.toLowerCase().replace(/\s/g, "-"));
  return (
    <Link href="/drinks/[id]/[slug]" as={`/drinks/${drink.id}/${slug}`}>
      <section role="listitem" className={styles.drinkCard}>
        <img className={styles.image} src={drink.image} alt={drink.name} />
        <div className={styles.content}>
          <h3 className={styles.drinkName}>{drink.name}</h3>
          <DrinkCategory>{drink.category}</DrinkCategory>
        </div>
      </section>
    </Link>
  );
};

export default DrinkCard;
