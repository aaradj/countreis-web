import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Components/Context/DataContextProvider";
const Countery = () => {
  const location = useLocation();
  console.log(location);
  const pathname = location.pathname;
  const splitedPath = pathname.split("/");
  const newPath = splitedPath[2];
  console.log(newPath);
  const data = useContext(DataContext);
  return (
    <div>
      {data?.data.map((item: any) => {
        if (item.name.common === newPath) {
          return (
            <div>
              <h1>{item.name.common}</h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Countery;
