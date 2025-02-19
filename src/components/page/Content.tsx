import { PropsWithChildren } from "react";
import styles from "./styles/Content.module.css";

const Content = ({ children }: PropsWithChildren) => {
  return (
    <main className={styles.content} data-testid="page-content">
      {children}
    </main>
  );
};

export default Content;
