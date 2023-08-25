import { Route, Routes } from "react-router-dom";

import { Suspense, lazy } from "react";

import Layout from "./components/Layout";

import Loading from "./components/Loading";
import { AuthContextProvider } from "./context/AuthContext";
import AuthPages from "./components/AuthPages";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="verify" element={<VerifyEmail />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="dashboard"
              element={
                <AuthPages>
                  <Dashboard />
                </AuthPages>
              }
            />

            <Route
              path="Profile"
              element={
                <AuthPages>
                  <Profile />
                </AuthPages>
              }
            />
          </Route>
        </Routes>
      </AuthContextProvider>
    </Suspense>
  );
};

export default App;
