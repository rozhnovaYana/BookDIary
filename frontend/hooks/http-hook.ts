import { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";

export default () => {
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const controllers = useRef<AbortController[]>([]);

  const sendHttp = useCallback(
    async (
      url: string,
      method = "GET",
      data: {} | undefined = undefined,
      headers = {}
    ) => {
      try {
        setLoading(true);
        const controller = new AbortController();
        controllers.current.push(controller);
        console.log({
          method,
          url,
          data,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          signal: controller.signal,
        });
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
        setLoading(false);
        return response.data;
      } catch (err: any) {
        setLoading(false);
        setError(err.response?.data?.message || "Please, try again later.");
        console.log(err);
        throw err;
      } finally {
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
