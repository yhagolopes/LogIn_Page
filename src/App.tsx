import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FaLongArrowAltLeft } from "react-icons/fa";

import { Login } from "./pages/Login";
import { Account } from "./pages/Account";
import { Register } from "./pages/Register";
import { Code } from "./pages/Code";
import { Update } from "./pages/Update/Update";

import { MinPage, Credits, IconLink } from "./global-css";

function App() {
  return (
    <MinPage>
      <BrowserRouter>
        <IconLink to="/" title="Go back">
          <FaLongArrowAltLeft />
        </IconLink>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/code" element={<Code />} />

          <Route path="/update/:label" element={<Update />} />
        </Routes>
      </BrowserRouter>

      <Credits>Copyright © 2023 Yhago Lopes</Credits>
    </MinPage>
  );
}

export default App;
