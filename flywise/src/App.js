import Navbar from "./components/Navbar";
import About from "./components/About";
import Form from "./components/Form";
import { useState } from "react";
function App() {
  const [results, setResult] = useState();
  return (
    <div className="font-bold">
      <Navbar />
      <Form result={results} setResult={setResult} />
      {!results && <About />}
    </div>
  );
}

export default App;
