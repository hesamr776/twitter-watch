import Image from "next/image";

import styles from "@/src/styles/TwitterAccounts.module.css";

export default function TwitterAccount({ name, avatar, background }) {
  return (
    <div className={styles.twitterAccount}>
      <Image
        src={background}
        alt="twitter account banner"
        className={styles.background}
        width={358}
        height={129}
        priority
      />

      <Image
        src={avatar}
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
