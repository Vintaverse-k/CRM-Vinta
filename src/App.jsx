import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignIn/SignUp";
import VerifyEmail from "./Components/SignIn/VerifyEmail";
import VerifyCode from "./Components/SignIn/VerifyCode";
import VerifyPassword from "./Components/SignIn/VerifyPassword";
import PasswordChanged from "./Components/SignIn/PasswordChanged";
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
