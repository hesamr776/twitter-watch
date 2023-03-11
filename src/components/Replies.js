import { useFetch } from "@/src/hooks/useFetch";
import Reply from "./Reply";

export default function RepliesList({ tweetId }) {
  const { data, isLoading } = useFetch("replies", tweetId);

  return (
    <>
      {isLoading && "..."}

      {data &&
        data.map(({ date, text, username, avatar, sentiment }) => (
          <Reply
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
