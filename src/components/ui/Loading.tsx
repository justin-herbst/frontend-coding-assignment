import { useTranslations } from "next-intl";
import { SpinnerIcon } from "../icons";
import styles from "./styles/Loading.module.css";

const Loading = () => {
  const t = useTranslations("Search");
  return (
    <div className={styles.loadingContainer}>
      <SpinnerIcon className={styles.icon} />
      <div className={styles.text}>{t("searching")}</div>
    </div>
  );
};

export default Loading;
