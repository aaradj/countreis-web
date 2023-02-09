import { useState, useEffect, createContext } from "react";
import axios from "axios";
export const DataContext = createContext<IState | null>(null);
interface DataContextProviderProps{
    children:React.ReactNode;
}
export type IState = {
    loading:boolean;
    data:Array<object> | [];
    error:"" | "somthing went wrong";
}
const initialState:IState = {
    loading:true,
    data:[],
    error:""
}
const DataContextProvider = (props:DataContextProviderProps) => {
    const [state,setState] = useState<IState>(initialState)
    useEffect(()=>{
        const fetchData = async () => {
            await axios.get("https://restcountries.com/v3.1/all")
            .then(res=>{
                setState({...state, loading:false , data:res.data, error:""})
            })
            .catch(()=>{
                setState({...state,  loading:false , data:[], error:"somthing went wrong"})
            })
        }
        fetchData()
    },[])
  return (
    <DataContext.Provider value={state} >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
