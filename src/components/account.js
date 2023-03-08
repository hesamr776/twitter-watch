import Image from "next/image";

import styles from "@/src/styles/Account.module.css";

export default function TwitterAccount({ name, avatar, background }) {
  console.log(name, avatar, background);
  return (
    <div className={styles.twitterAccount}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.background}
        width={100}
        height={24}
        priority
      />
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.avatar}
        width={100}
        height={24}
        priority
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
}
