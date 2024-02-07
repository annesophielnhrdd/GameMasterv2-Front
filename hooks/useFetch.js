import { useState, useEffect } from "react";

export const useFetch = ({
  url,
  method = "GET",
  body = null,
  listenedStates = [],
}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const raw = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: body ? JSON.stringify(body) : null,
        });
        const json = await raw.json();
        setData(json);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, listenedStates);

  return {
    data,
    error,
    isLoading,
  };
};
