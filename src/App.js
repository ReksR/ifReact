import React from "react";

function App() {
  const firstNum = 10;
  let final;
  if (firstNum < 20 || firstNum > 30) {
    final = "Small";
  } else {
    final = "none";
  }
  const sty = {
    color: "purple",
    backgroundColor: "yellow",
    fontSize: "50px"
  };
  return <h1 style={sty}> the number is {final}</h1>;
}
export default App;
