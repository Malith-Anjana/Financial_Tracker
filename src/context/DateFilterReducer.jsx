import React from "react";

const DateFilterReducer = (state, action) => {
    switch (action.type) {
      case "SETDATE": {
        return {
          date: action.payload,
        };
      }
      case "CLEAR": {
        return {
          date: null,
        };
      }
      default:
        return state;
    }
  };
  
  export default DateFilterReducer;