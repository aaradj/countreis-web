import { useContext } from "react";
import Coutereis from "../../Pages/Coutreis";
import { DataContext } from "../Context/DataContextProvider";
const Store = () => {
  const dataContext = useContext(DataContext);
  return (
    <div>
      {dataContext?.loading ? (
        <h1>Loading...</h1>
      ) : <Coutereis countereisData={dataContext?.data} />
      }

      {dataContext?.error && <h2>{dataContext.error}</h2>}
    </div>
  );
};

export default Store;
