import Navbar from "./components/Navbar";
import About from "./components/About";
import Form from "./components/Form";
import ModelViewer from "./components/Visualization/ModelViewer";
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
      {results && <ModelViewer scale="10" />}
      {!results && <About />}
    </div>
  );
}

export default App;
