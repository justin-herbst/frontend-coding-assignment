import { Loading } from "@/components/ui";
import styles from "./styles/DrinkDetails.module.css";
import { DetailedDrink, Ingredient } from "./types";
import { PageHeader } from "@/components/page";
import DrinkCategory from "./DrinkCategory";
import { useTranslations } from "next-intl";
import { ShareLink } from "@/components/ui";

type Props = {
  drink: DetailedDrink | null;
  loading: boolean;
  error: string;
};
const DrinkDetails = ({ drink, loading, error }: Props) => {
  const t = useTranslations("Search");
  if (loading || !drink) {
    return <Loading />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  const iLength = drink.ingredients.length;
  const iMid = Math.ceil(iLength / 2);
  const slug = drink.name.toLowerCase().replace(/\s/g, "-");
  const shareURL = `http://localhost:3000/share/${drink.id}/${slug}`;

  return (
    <div className={styles.drinkDetailsContainer}>
      <PageHeader>{drink.name}</PageHeader>
      <div className={styles.drinkCard}>
        <div className={styles.top}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={drink.image} alt={drink.name} />
            <DrinkCategory>{drink.category}</DrinkCategory>
          </div>
          <div className={styles.ingredientContainer}>
            <h3 className={styles.subtitle}>
              {t("ingredients", { count: iLength })}
            </h3>
            <ul className={styles.ingredients}>
              <div className={styles.column}>
                {drink.ingredients
                  .slice(0, iMid)
                  .map((ingredient: Ingredient, i: number) => (
                    <li key={i} className={styles.ingredient}>
                      {ingredient.measurement} of {ingredient.name}
                    </li>
                  ))}
              </div>
              <div className={styles.column}>
                {drink.ingredients
                  .slice(iMid, iLength)
                  .map((ingredient: Ingredient, i: number) => (
                    <li key={i} className={styles.ingredient}>
                      {ingredient.measurement} of {ingredient.name}
                    </li>
                  ))}
              </div>
            </ul>
          </div>
        </div>
        <h3 className={styles.subtitle}>{t("instructions")}</h3>
        <p className={styles.text}>{drink.instructions}</p>
        <h3 className={styles.subtitle}>{t("glass-needed")}</h3>
        <p className={styles.text}>{drink.container}</p>
        <div className={styles.shareSection}>
          <h3 className={styles.subtitle}>{t("share-link")}</h3>
          <ShareLink url={shareURL} />
        </div>
      </div>
    </div>
  );
};
export default DrinkDetails;
