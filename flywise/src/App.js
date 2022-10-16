import Navbar from "./components/Navbar";
import About from "./components/About";
import Form from "./components/Form";
import { createBrowserRouter } from "react-router-dom";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  const [results, setResult] = useState();

  return (
    <div className="font-bold">
      <Navbar />
      <Form result={results} setResult={setResult} />
      {results}
      {!results && <About />}
    </div>
  );
}

export default App;
