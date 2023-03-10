import { useFetch } from "../hooks/useFetch";
import Audience from "../components/Audience";

export default function Audiences({ username }) {
  const { data, isLoading } = useFetch("audience", username);
  console.log(data, username);

  return (
    <>
      {isLoading && "..."}

      {data &&
        data.map(({ username, avatar }) => (
          <Audience
            key={`audience_${username}`}
            username={username}
            avatar={avatar}
          />
        ))}
    </>
  );
}
