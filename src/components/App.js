import React from "react";
import { ClassBasedCount, FunctionBasedCount } from "./Count";

const App = () => {
  return (
    <div>
      <ClassBasedCount />
      <FunctionBasedCount />
      <hr />
    </div>
  );
};

export default App;
