import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

const Home = lazy(() => import("./components/pages/Home"));
const Login = lazy(() => import("./components/pages/Login"));
const Register = lazy(() => import("./components/pages/Register"));
const Profile = lazy(() => import("./components/pages/Profile"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

