interface SearchFieldProps {
  onChange: (str: string) => void;
  value: string;
}

const SearchField = ({ onChange, value }: SearchFieldProps) => {
  return (
    <input
      type="text"
      placeholder="Type the location here"
      className="form-control"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchField;
