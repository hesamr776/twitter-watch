import { useFetch } from "../hooks/useFetch";
import Tweet from "../components/Tweet";

export default function Tweets({ username }) {
  const { data, isLoading } = useFetch("tweets", username);
  console.log(data, username);

  return (
    <>
      {isLoading && "..."}

      {data &&
        data.map(({ date, text, avatar, sentiment, tweetId }) => (
          <Tweet
            key={`tweets_${username}`}
            username={username}
            id={tweetId}
            date={date}
            text={text}
            avatar={avatar}
            sentiment={sentiment}
          />
        ))}
    </>
  );
}
