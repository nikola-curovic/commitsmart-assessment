import { useState, useEffect, useCallback } from "react";
import { Data } from "../types";

const useFetch = (page: number, list: Data[]) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchList, setList] = useState<Data[]>([]);

  const sendQuery = useCallback(
    async (page: number, list: Data[]) => {
      if (fetchList.length < list.length) setLoading(true);

      setTimeout(() => {
        setList(list.filter((data, index) => index < page * 5));
        setLoading(false);
      }, 1000);
    },
    [fetchList]
  );

  useEffect(() => {
    sendQuery(page, list);
  }, [page, sendQuery, list]);

  return { loading, fetchList };
};

export default useFetch;
