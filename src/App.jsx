import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignIn/SignUp";
import VerifyEmail from "./Components/SignIn/VerifyEmail";
import VerifyCode from "./Components/SignIn/VerifyCode";
import VerifyPassword from "./Components/SignIn/VerifyPassword";
import PasswordChanged from "./Components/SignIn/PasswordChanged";
import Sidebar from "./Components/SideBar/Sidebar";
import TopBar from "./Components/TopBar/TopBar";
import MyTask from "./Components/sidebarpath/MyTasks";
import Inbox from "./Components/sidebarpath/Inbox";
import Calendar from "./Components/Calendar/Calendar";
import Reports from "./Components/sidebarpath/Reports";
import Portfolio from "./Components/sidebarpath/Portfolio";
import ProductManagement from "./Components/sidebarpath/ProductManagement";
import AllTeam from "./Components/sidebarpath/AllTeam";
import ProductTeam from "./Components/sidebarpath/ProductTeam";
import Dashboard from "./Components/sidebarpath/Dashboard";

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
        <Route path="/inbox" element={<Inbox/>} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/productmanagement" element={<ProductManagement/>} />
        <Route path="/allteam" element={<AllTeam/>} />
        <Route path="/productteam" element={<ProductTeam/>} />
        
      </Routes>
    </Router>
  );
};

export default App;