import { createContext, useContext, useReducer } from "react";
import {DB} from "../mockDB";


export const resultReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_RESULT":
      return {
        ...state,
        result: DB.filter(item => {
            return  JSON.stringify(item.name).toUpperCase().includes(action.payload.toUpperCase()) || 
                    JSON.stringify(item.id).toUpperCase().includes(action.payload.toUpperCase()) || 
                    JSON.stringify(item.items).toUpperCase().includes(action.payload.toUpperCase()) || 
                    JSON.stringify(item.address).toUpperCase().includes(action.payload.toUpperCase()) || 
                    JSON.stringify(item.pincode).toUpperCase().includes(action.payload.toUpperCase())
        }),
      };
    case "SET_SEARCH_PATTERN": 
      return {
          ...state,
          searchPattern: action.payload
      }
    default:
      break;
  }
  return state;
};

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
    const [state, dispatch] = useReducer(resultReducer, 
        {
            searchPattern:"",
            result: [],
        });
    return (
      <ResultContext.Provider
        value={{
          state,
          dispatch
        }}
      >
        {children}
      </ResultContext.Provider>
    );
  };
  
  export const useResult = () => useContext(ResultContext);