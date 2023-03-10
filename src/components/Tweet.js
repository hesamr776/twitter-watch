import Image from "next/image";

import styles from "@/src/styles/Tweet.module.css";

export default function Tweet({ date, text, username, avatar, sentiment }) {
  return (
    <div className={sentiment ? styles.positiveTweet : styles.negativeTweet}>
      <Image
        src={avatar}
        className={styles.avatar}
        alt="twitter account avatar"
        width={50}
        height={50}
        priority
      />

      <div>
        <p className={styles.username}>
          {username}
          <span className={styles.date}> .{date}</span>
        </p>

        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
