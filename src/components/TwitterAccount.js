import Image from "next/image";

import styles from "@/src/styles/TwitterAccounts.module.css";

export default function TwitterAccount({ name, username }) {
  return (
    <div className={styles.twitterAccount}>
      <Image
        src={`/${username}-bg.jpeg`}
        alt="twitter account banner"
        className={styles.background}
        width={358}
        height={129}
        priority
      />

      <Image
        src={`/${username}.jpg`}
        className={styles.avatar}
        alt="twitter account avatar"
        width={80}
        height={80}
        priority
      />

      <p className={styles.name}>{name}</p>
    </div>
  );
}
