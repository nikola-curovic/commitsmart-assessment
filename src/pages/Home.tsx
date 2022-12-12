import { useState, useEffect } from "react";
import ListView from "../components/ListView";
import Loading from "../components/Loading";
import SearchField from "../components/SearchField";
import useFetch from "../hooks/useFetch";
import useSearch from "../hooks/useSearch";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const { searchList } = useSearch(search);
  const { loading, fetchList } = useFetch(page, searchList);

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    window.onscroll = () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        setPage((prev) => prev + 1);
      }
    };
  }, []);

  return (
    <div className="container py-4">
      <h1 className="pb-4 border-bottom">Tripscout</h1>
      <div className="d-flex justify-content-between align-items-start py-4 flex-wrap">
        <div className="col-md-3 search-field pb-4">
          <SearchField onChange={setSearch} value={search} />
        </div>
        <div className="col-md-8">
          <ListView list={fetchList} />
          <Loading show={loading} />
        </div>
      </div>
    </div>
  );
};

export default Home;
