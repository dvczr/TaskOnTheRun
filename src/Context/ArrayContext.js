import React from "react";

const Context = {
  array: [],
  updateArray: () => {},
  badgeCount: () => {
    array.length;
  },
  counter: NaN,
  setCounter: () => {},
};

export const ArrayContext = React.createContext(Context);
