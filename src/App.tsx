import { Routes, Route } from "react-router-dom";

import { Suspense, lazy } from "react";

import Layout from "./components/Layout";
import Loading from "./components/Loading";

import Home from "./pages/Home";
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
