import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
import { Suspense, lazy } from "react";
// import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

import Home from "./pages/Home";
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Protected = lazy(() => import("./pages/Protected"));
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="protected" element={<Protected />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
