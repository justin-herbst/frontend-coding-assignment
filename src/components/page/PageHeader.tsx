import { PropsWithChildren } from "react";
const styles = require("./styles/PageHeader.module.css");

const PageHeader = ({ children }: PropsWithChildren) => {
  return (
    <h1 data-testid="page-heading" className={styles.pageHeader}>
      {children}
    </h1>
  );
};

export default PageHeader;
