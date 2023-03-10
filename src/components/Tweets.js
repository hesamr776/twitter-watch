import { useFetch } from "../hooks/useFetch";
import Tweet from "../components/Tweet";

export default function Tweets({ username }) {
  const { data, isLoading } = useFetch("tweets", username);
  console.log(data, username);

  return (
    <>
      {isLoading && "..."}

      {data &&
        data.map(({ id, date, text, avatar, username, sentiment }) => (
          <Tweet
            key={`tweets_${username}`}
            username={username}
            date={date}
            text={text}
            avatar={avatar}
            sentiment={sentiment}
          />
        ))}
    </>
  );
}
