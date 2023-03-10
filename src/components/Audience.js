import Image from "next/image";

import styles from "@/src/styles/Audience.module.css";

export default function Audience({ id, avatar }) {
  return (
    <div className={styles.audience}>
      <Image
        src={avatar}
        className={styles.avatar}
        alt="twitter account avatar"
        width={40}
        height={40}
        priority
      />

      <p className={styles.id}>@{id}</p>
    </div>
  );
}
