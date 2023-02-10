//context
import { useContext } from "react";
import { DataContext } from "../Context/DataContextProvider";
//components
import Countereis from "../../Pages/Coutreis";

const Store = () => {
  const dataContext = useContext(DataContext);
  return (
    <div>
      {dataContext?.loading ? (
        <h1>Loading...</h1>
      ) : (
        <Countereis countereisData={dataContext?.data} />
      )}

      {dataContext?.error && <h2>{dataContext.error}</h2>}
    </div>
  );
};

export default Store;
