import { useTranslations } from "next-intl";
import { CheckIcon, CopyIcon } from "../icons";
import styles from "./styles/ShareLink.module.css";
import { useState } from "react";

const copyTextToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};

const ShareLink = ({ url }: { url: string }) => {
  const [copied, setCopied] = useState<Boolean>(false);
  const t = useTranslations("Search");
  const handleClick = async () => {
    await copyTextToClipboard(url);
    setCopied(true);
  };
  return (
    <div className={styles.shareLinkContainer}>
      <div className={styles.shareLinkInput}>{url}</div>
      <button className={styles.shareLinkButton} onClick={handleClick}>
        {copied ? (
          <>
            <CheckIcon className={styles.checkIcon} />
            {t("copied")}
          </>
        ) : (
          <>
            <CopyIcon className={styles.copyIcon} />
            {t("copy")}
          </>
        )}
      </button>
    </div>
  );
};

export default ShareLink;
