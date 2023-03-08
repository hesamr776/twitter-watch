import { useState, useEffect } from "react";
const productionBaseUrl =
  "https://twitter-watch-vercel-flask-9601jdplp-hesamr776.vercel.app";
const developmentBaseUrl = "http://localhost:3001";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? developmentBaseUrl
    : productionBaseUrl;

export const useTwitterWatchFetch = (endpoint) => {
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
