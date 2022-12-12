import { Data } from "../types";
import Place from "./Place";

interface ListViewProps {
  list: Data[];
}

const ListView = ({ list }: ListViewProps) => {
  return (
    <>
      {list.length > 0
        ? list.map((data, i) => (
            <Place
              key={i}
              name={data.name}
              description={data.description}
              location={data.location}
              picture={data.picture}
            />
          ))
        : "No List"}
    </>
  );
};

export default ListView;
