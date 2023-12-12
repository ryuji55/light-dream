import React from "react";
import { Route, Routes } from "react-router-dom";
import { User } from "./components/User";
import { Example } from "./example";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/example" element={<Example />} />
    </Routes>
  );
};

export default AppRoutes;
