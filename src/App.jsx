import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import VerifyAccount from './pages/VerifyAccount';
import PropTypes from "prop-types";
import ResetPassword from './pages/ResetPassword';

const PrivateRoute = ({ component }) => {
  const isAuthenticated = Boolean(localStorage.getItem("user"));

  if (isAuthenticated) {
    return component;
  }

  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  component: PropTypes.node,
};

function App() {
  return (
    <Router>
      
      <div className="container mt-5">
        <Routes>
          <Route
            path="/posts"
            element={<PrivateRoute component={<h1>Welcome To Post Page</h1>} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
          <Route path="/check-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
