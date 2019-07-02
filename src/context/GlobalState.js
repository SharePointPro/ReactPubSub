import React from "react";
import GlobalContext from "./globalContext";
import globalEvents from "./globalEvents";

const GlobalState = props => {  
  //Global state only holds events, but in real application
  //would hold more data
  const state = {
    events: globalEvents
  };

  return (
    <GlobalContext.Provider value={state} >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
