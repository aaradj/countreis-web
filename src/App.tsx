import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DataContextProvider from "./Components/Context/DataContextProvider";
import Store from "./Components/Store";
import routes, { IRoutes } from "./routes";
const App = () => {
  const [route, setRoute] = useState<IRoutes[]>(routes);
  return (
    <DataContextProvider>
      <Routes>
        {route.map((item: IRoutes) => {
          return (
            <Route
              key={item._id}
              path={item.path}
              element={<item.component />}
            />
          );
        })}
      </Routes>
    </DataContextProvider>
  );
};
export default App;
