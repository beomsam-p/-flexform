import { Route, Routes } from "react-router-dom";
import Home from "routes/home";
import Layout from "layout/Layout";
import Workspace from "routes/workspace";
import Servey from "routes/servey";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/servey" element={<Servey />} />
      </Route>
    </Routes>
  );
}

export default App;
