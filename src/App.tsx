import DataContextProvider from "./Components/Context/DataContextProvider";
import Store from "./Components/Store";

const App = () => {
  return (
    <DataContextProvider><Store /></DataContextProvider>
  );
};
export default App;
