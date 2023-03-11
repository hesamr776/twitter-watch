import { useState, useEffect } from "react";

// const productionBaseUrl = "https://twitter-watch-vercel-flask.vercel.app";
const productionBaseUrl = "https://twitter-watch-flask-mongodb.vercel.app";
// const developmentBaseUrl = "http://localhost:3001";
const developmentBaseUrl = "http://localhost:5001";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? developmentBaseUrl
    : productionBaseUrl;

export const useFetch = (endpoint, username) => {
  const [query, setQuery] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      let response = { status: 404, error: "endpoint not found" };

      setQuery({ ...query, isLoading: true });

      try {
        switch (endpoint) {
          case "accounts":
            response = await fetch(`${baseUrl}/accounts`);
            break;
          case "tweets":
            response = await fetch(`${baseUrl}/tweets/${username}`);
            break;
          case "audience":
            response = await fetch(`${baseUrl}/audience/${username}`);
            break;
          case "replies":
            response = await fetch(`${baseUrl}/replies/${username}`);
            break;
          case "sentiment":
            response = await fetch(`${baseUrl}/sentiment/${username}`);
            break;

          default:
            break;
        }
      } catch (error) {
        response.error = error.message;
      }

      setQuery({ ...query, isLoading: false });

      if (response.status === 200) {
        setQuery({ ...query, data: JSON.parse(await response.text()) });
      } else {
        setQuery({ ...query, error: response.error });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...query };
};
