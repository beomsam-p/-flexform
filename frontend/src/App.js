import { Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Layout from "layout";
import Workspace from "pages/workspace";
import Servey from "pages/servey";
import NotFound from "pages/notFound";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/survey" element={<Servey />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
