import { NextIcon, PreviousIcon } from "@/components/icons";
import styles from "./styles/DrinkPaging.module.css";

type Props = {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};
const DrinkPaging = ({
  hasNextPage,
  hasPreviousPage,
  onNextPageClick,
  onPrevPageClick,
}: Props) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.button}
        onClick={onPrevPageClick}
        disabled={!hasPreviousPage}
      >
        <PreviousIcon className={styles.icon} />
      </button>
      <button
        className={styles.button}
        onClick={onNextPageClick}
        disabled={!hasNextPage}
      >
        <NextIcon className={styles.icon} />
      </button>
    </div>
  );
};

export default DrinkPaging;
