import Navbar from "./components/Navbar";
import Form from "./components/Form";
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
      <Form></Form>
    </div>
  );
}

export default App;
