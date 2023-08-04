import { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";

const useHttpRequest = () => {
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const controllers = useRef<AbortController[]>([]);

  const sendHttp = useCallback(
    async (
      url: string,
      method = "GET",
      data: {} | null = null,
      headers = {}
    ) => {
      try {
        setLoading(true);
        const controller = new AbortController();
        controllers.current.push(controller);
        const response = await axios({
          method,
          url,
          data,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          signal: controller.signal,
        });

        controllers.current.filter((i) => i !== controller);

        return response.data;
      } catch (err: any) {
        setError(err.response.data?.message || "Please, try again later.");
      } finally {
        setLoading(false);
      }
    },
    []
  );
  const onClearError = () => {
    setError(null);
  };

  useEffect(() => {
    return controllers.current.forEach((i) => i.abort());
  }, []);
  return { error, loading, sendHttp, onClearError };
};
export default useHttpRequest;
