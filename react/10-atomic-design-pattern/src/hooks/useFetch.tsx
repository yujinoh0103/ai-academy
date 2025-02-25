import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setData(data))
    //   .catch((error) => setError(error))
    //   .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
