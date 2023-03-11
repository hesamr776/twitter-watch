import Image from "next/image";

import styles from "@/src/styles/Tweet.module.css";

export default function Reply({ date, text, username, sentiment }) {
  return (
    <div className={sentiment ? styles.positiveTweet : styles.negativeTweet}>
      <Image
        src={`/twitter-avatar.webp`}
        className={styles.avatar}
        alt="twitter account avatar"
        width={50}
        height={50}
        priority
      />
      <div>
        <p className={styles.username}>
          {username}
          <span className={styles.date}>
            {"  "}
            {new Date(date).toLocaleString()}
          </span>
        </p>

        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
