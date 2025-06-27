import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/common/Home";
import Login from "./modules/common/Login";
import Register from "./modules/common/register";
import AddProperty from "./modules/user/Owner/AddProperty";
import AllProperties from "./modules/user/renter/AllProperties";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/browse" element={<AllProperties />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
