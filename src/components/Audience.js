import Image from "next/image";

import styles from "@/src/styles/Audience.module.css";

export default function Audience({ username, avatar }) {
  return (
    <div className={styles.audience}>
      <Image
        src={avatar || "/twitter-avatar.webp"}
        className={styles.avatar}
        alt="twitter account avatar"
        width={40}
        height={40}
        priority
      />

      <p className={styles.id}>@{username}</p>
    </div>
  );
}
