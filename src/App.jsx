import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Academics from "./pages/Academics";
import Fiction from "./pages/Fiction";
import NonFiction from "./pages/NonFiction";
import YoungAdults from "./pages/YoungAdults";
import ComicsGraphics from "./pages/ComicsGraphics";
import Childrens from "./pages/Childrens";
import AppLayout from "./ui/layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/nonfiction" element={<NonFiction />} />
          <Route path="/childrens" element={<Childrens />} />
          <Route path="/youngadults" element={<YoungAdults />} />
          <Route path="/comicsandgraphics" element={<ComicsGraphics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
