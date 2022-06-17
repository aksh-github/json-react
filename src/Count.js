import React from "react";

import { useGlobal } from "./GlobalContext";

const Count = (props) => {
  const globalContext = useGlobal();
  return <p>Counter: {globalContext.data.count}</p>;
};

export default Count;
