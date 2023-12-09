import React, { createContext, useEffect, useReducer } from "react";
import DateFilterReducer from "./DateFilterReducer";


const INITIAL_STATE = {
  date: JSON.parse(localStorage.getItem("date")) || null,
};

export const DateFilterContext = createContext(INITIAL_STATE);

export const DateFilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DateFilterReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("date", JSON.stringify(state.date));
  }, [state.date]);

  return (
    <DateFilterContext.Provider value={{ date: state.date, dispatch }}>
      {children}
    </DateFilterContext.Provider>
  );
};