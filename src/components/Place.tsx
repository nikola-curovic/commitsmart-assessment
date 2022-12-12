import { Data } from "../types";

const Place = ({ name, description, location, picture }: Data) => {
  return (
    <div className="mb-4 pb-4 border-bottom">
      <div>
        <img alt={name} className="w-100" src={picture} />
      </div>
      <h2 className="mt-4">{name}</h2>
      <div className="mt-4">{description}</div>
      <div className="fw-bold mt-2">{location}</div>
    </div>
  );
};

export default Place;
