import { useState } from "react";
//react router dom
import { Routes, Route } from "react-router-dom";
//context
import DataContextProvider from "./Components/Context/DataContextProvider";
//styled components
import { Container } from "./Components/Layouts/PageLayout/layout";
//routes
import routes, { IRoutes } from "./routes";

const App = () => {
  const [route, setRoute] = useState<IRoutes[]>(routes);
  return (
    <Container>
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
    </Container>
  );
};
export default App;
