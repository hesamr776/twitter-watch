import { useFetch } from "../hooks/useFetch";

import styles from "@/src/styles/Sentiment.module.css";
import { Fragment } from "react";

export default function Sentiment({ username, tab }) {
  const { data, isLoading } = useFetch("sentiment", username);

  return (
    <>
      {isLoading && "..."}
      <div className={styles.sentiment}>
        {data &&
          Object.keys(data).map((sentiment) =>
            (tab == 0 && !sentiment.includes("tweets")) ||
            (tab == 1 && sentiment.includes("tweets")) ? (
              <div key={`sentiment_${sentiment}`} className={styles.sentiment}>
                <p className={styles.text}>
                  {sentiment.split("_").join(" ")}:{" "}
                </p>

                <p className={styles.text}>{data[sentiment]}</p>
              </div>
            ) : (
              <Fragment key={`sentiment_${sentiment}`}></Fragment>
            )
          )}
      </div>
    </>
  );
}
