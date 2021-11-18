/**
 * Hooks
 */
import { useCallback, useEffect, useState } from "react";

/**
 * Types
 */
import { fetcherType } from "./types";

const useApi = (url: string, fetcher?: fetcherType) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function refresh() {
    fetchData();
  }

  const fetchData = useCallback(async () => {
    if (fetcher) {
      if (typeof fetcher === "function") {
        setLoading(true);

        fetcher(url).then(
          (result) => {
            setLoading(false);
            setData(result);
          },
          (error) => {
            setLoading(false);
            setError(error);
          }
        );
      }
    } else {
      setLoading(true);

      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            setData(result.data);
            setLoading(false);
          },
          (error) => {
            setError(error);
            setLoading(false);
          }
        );
    }
  }, [fetcher, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refresh,
  };
};

export default useApi;
