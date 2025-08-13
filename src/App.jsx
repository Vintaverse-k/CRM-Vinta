import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp";
import VerifyEmail from "./components/SignIn/VerifyEmail";
import VerifyCode from "./components/SignIn/VerifyCode";
import VerifyPassword from "./components/SignIn/VerifyPassword";
import PasswordChanged from "./components/SignIn/PasswordChanged";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/SideBar/Sidebar";
import TopBar from "./Components/TopBar/TopBar";
import MyTask from "./Components/sidebarpath/MyTasks";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/verifycode" element={<VerifyCode />} />
        <Route path="/verifypassword" element={<VerifyPassword />} />
        <Route path="/passwordchanged" element={<PasswordChanged />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/topbar" element={<TopBar />} />
        <Route path="/mytask" element={<MyTask/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
