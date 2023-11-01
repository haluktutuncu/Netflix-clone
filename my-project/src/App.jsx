import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import { GlobalProvider } from "./context/GlobalState";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthContextProvider>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </GlobalProvider>
    </AuthContextProvider>
  );
}
