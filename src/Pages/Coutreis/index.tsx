import { useEffect, useState } from "react";
import { spliter } from "../../Components/helper";
interface CountereisProps {
  countereisData: Array<object> | [] | undefined;
}
const Coutereis = ({ countereisData }: CountereisProps) => {
  const [data, setData] = useState(countereisData);
  const [Stateregion, setRegion] = useState("Europe");
  const [search, setSearch] = useState<string | number>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value);
  };
  const inputChange = (evnet: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(evnet.target.value);
  };
  const handleSearch = (name: any) => {
    if (typeof name === "string") {
      const newName = name.toLowerCase();
      return newName;
    }
  };

  useEffect(() => {
    setSearch("");
  }, [Stateregion]);

  return (
    <div>
      <input type="text" value={search} onChange={inputChange} />
      <select name="region" id="1" value={Stateregion} onChange={handleChange}>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
      </select>
      {data?.map((item: any, length) => {
        const { name, region, population, flags, capital }: any = item;
        if (Stateregion === region && search === "") {
          return (
            <div key={length}>
              <img src={flags.png} alt={`${name.common} flag`} />
              <h3>{name.common}</h3>
              <p>Population: {spliter(population)}</p>
              <p>Region: {region}</p>
              <p>Capital: {capital}</p>
            </div>
          );
        } else if (handleSearch(name.common) === handleSearch(search)) {
          return (
            <div key={length}>
              <img src={flags.png} alt={`${name.common} flag`} />
              <h3>{name.common}</h3>
              <p>Population: {spliter(population)}</p>
              <p>Region: {region}</p>
              <p>Capital: {capital}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Coutereis;
