import Image from "next/image";

import styles from "@/src/styles/Tweet.module.css";

export default function Tweet({ date, text, username, id, sentiment }) {
  return (
    <a
      className={sentiment ? styles.positiveTweet : styles.negativeTweet}
      href={`/replies/${id}`}
    >
      <Image
        src={`/${username}.jpg`}
        className={styles.avatar}
        alt="twitter account avatar"
        width={50}
        height={50}
        priority
      />
      <div>
        <p className={styles.date}>{new Date(date).toLocaleString()}</p>

        <p className={styles.text}>{text}</p>
      </div>
    </a>
  );
}
