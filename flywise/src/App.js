import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Form from "./components/Form";
import ModelViewer from "./components/Visualization/ModelViewer";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <div className="font-bold">
      <Navbar />
      <Main />
      <ModelViewer scale="10" />
      <Form />
    </div>
  );
}

export default App;
