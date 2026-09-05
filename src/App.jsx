import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";

import CommonLayout from "./components/layout/CommonLayout";
import Blog from "./pages/Blog";
import ErrorMsg from "./components/common/ErrorMsg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CommonLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Services" element={<Service />} />
            <Route path="/Blog" element={<Blog />} />
          </Route>
           <Route path="*" element={<ErrorMsg />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
