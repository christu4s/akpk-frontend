import "./App.css";
import EmailLogin from "./features/auth/login/EmailLogin";
import PhoneLogin from "./features/auth/login/PhoneLogin";
import SecondStep from "./features/auth/login/SecondStep";
import Login from "./features/auth/login";

import {
  HashRouter as Router,
  Routes as Switch,
  Route,
  } from "react-router-dom";
import SignUpStep from "./features/auth/signup/Step";
import PhoneSignUp from "./features/auth/signup/PhoneSignUp";
import EmailSignUp from "./features/auth/signup/EmailSignUp";
import NewPassword from "./features/auth/signup/NewPassword";
import CheckEmail from "./features/auth/signup/CheckEmail";
import CheckPhone from "./features/auth/signup/CheckPhone";
import Navbar from "./components/Navbar";
import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Home from "./features/home";
import Education from "./features/home/education";
import Debt from "./features/home/Debt";
import FAS from "./features/home/FAS";
import {AuthProvider} from "./components/Auth";
import {useEffect} from 'react';
import {useAuth} from './components/Auth';
import {ProtectedRoute} from "./components/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/email-login" element={<EmailLogin />} />
          <Route exact path="/signup-method" element={<SignUpStep />} />
          <Route exact path="/phone-signup" element={<PhoneSignUp />} />
          <Route exact path="/email-signup" element={<EmailSignUp />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route exact path="/email-check" element={<CheckEmail />} />
          <Route exact path="/phone-check" element={<CheckPhone />} />
          <Route exact path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route exact path="/education" element={<ProtectedRoute><Education /></ProtectedRoute>} />
          <Route exact path="/debt" element={<ProtectedRoute><Debt /></ProtectedRoute>} />
          <Route exact path="/advisory" element={<ProtectedRoute><FAS /></ProtectedRoute>} />
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
