import { useFetch } from "../hooks/useFetch";
import Audience from "../components/Audience";

export default function Audiences({ id }) {
  const { data, isLoading } = useFetch("audience", id);
  console.log(data, id);

  return (
    <>
      {isLoading && "..."}

      {data &&
        data.map(({ id, avatar }) => (
          <Audience key={`audience_${id}`} id={id} avatar={avatar} />
        ))}
    </>
  );
}
