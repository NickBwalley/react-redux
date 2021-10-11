import React from "react";
import { ClassBasedCount, FunctionBasedCount } from "./Count";

const App = () => {
  return (
    <div>
      <ClassBasedCount />
      <FunctionBasedCount />
    </div>
  );
};

export default App;
