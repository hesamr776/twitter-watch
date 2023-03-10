import { useFetch } from "../hooks/useFetch";
import Tweet from "../components/Tweet";

export default function Tweets({ id }) {
  const { data, isLoading } = useFetch("tweets", id);
  console.log(data, id);

  return (
    <>
      {isLoading && "..."}

      {data &&
        data.map(({ id, date, text, avatar, username, sentiment }) => (
          <Tweet
            key={`tweets_${id}`}
            id={id}
            date={date}
            text={text}
            avatar={avatar}
            username={username}
            sentiment={sentiment}
          />
        ))}
    </>
  );
}
