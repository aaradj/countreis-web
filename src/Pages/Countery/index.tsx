import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Components/Context/DataContextProvider";
import {
  getLanguage,
  getNativeName,
  getValue,
  getBorders,
  nameSplited
} from "../../Components/helper";
const Countery = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const splitedPath = pathname.split("/");
  const newPath = splitedPath[1];
  const data = useContext(DataContext);
  return (
    <div>
      {data?.data.map((item: any) => {
        const {
          name,
          currencies,
          population,
          capital,
          region,
          subregion,
          languages,
          flags,
          tld,
          borders,
        }: any = item;
        if (nameSplited(name.common) === newPath) {
          return (
            <div key={name.common}>
              <h1>{name.common}</h1>
              <img src={flags.png} alt={name} />
              <p>Native Name: {getNativeName(name.nativeName)}</p>
              <p>Population: {population}</p>
              <p>Region: {region}</p>
              <p>Sub Region: {subregion}</p>
              <p>Capital: {capital}</p>
              <p>Top Level Domain: {tld}</p>
              <p>Currencies: {getValue(currencies)}</p>
              <p>
                Languages:
                {getLanguage(languages).map((item: string, length: number) => {
                  if (length > 0) {
                    const newItem = `,${item} `;
                    return newItem;
                  } else {
                    return item;
                  }
                })}
              </p>
              <div>
                {borders && (
                  <p>
                    Borders:
                    {getBorders(borders).map((item: string, length: number) => {
                      if (length > 0) {
                        const newItem = `,${item} `;
                        return <span key={length}>{newItem}</span>;
                      } else {
                        return <span key={length}>{item}</span>;
                      }
                    })}
                  </p>
                )}
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
export default Countery;
