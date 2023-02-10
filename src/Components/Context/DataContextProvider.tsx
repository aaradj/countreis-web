import { useState, useEffect, createContext } from "react";

import axios from "axios";

export const DataContext = createContext<IState | null>(null);
export const ThemeProvider = createContext<any | null>(null);
interface DataContextProviderProps {
  children: React.ReactNode;
}

//state type
export type IState = {
  loading: boolean;
  data: Array<object> | [];
  error: "" | "somthing went wrong";
};

const initialState: IState = {
  loading: true,
  data: [],
  error: "",
};

const DataContextProvider = (props: DataContextProviderProps) => {
  const [state, setState] = useState<IState>(initialState);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => {
          setState({ ...state, loading: false, data: res.data, error: "" });
        })

        .catch(() => {
          setState({
            ...state,
            loading: false,
            data: [],
            error: "somthing went wrong",
          });
        });
    };

    fetchData();
  }, []);
  return (
    <ThemeProvider.Provider value={{ darkMode, setDarkMode }}>
      <DataContext.Provider value={state}>
        {props.children}
      </DataContext.Provider>
    </ThemeProvider.Provider>
  );
};

export default DataContextProvider;
