import { useState, useEffect, useCallback } from "react";
import { Data } from "../types";

const useSearch = (search: string) => {
  const [searchList, setList] = useState<Data[]>([]);

  const sendQuery = useCallback(async (search: string) => {
    const res = await fetch("/data.json");
    const result = await res.json();
    const list: Data[] = result.tourists;

    setList(
      search
        ? list.filter(
            (data) =>
              data.location
                .toLocaleLowerCase()
                .indexOf(search.toLocaleLowerCase()) > -1
          )
        : list
    );
  }, []);

  useEffect(() => {
    sendQuery(search);
  }, [search, sendQuery]);

  return { searchList };
};

export default useSearch;
