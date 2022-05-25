import { Route, Routes } from "react-router-dom";
import ClosedRoute from "./components/ClosedRoute";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import ProtectedRoute from "./components/ProtectedRoute";
function App() {

  return (
    <>
      <AuthContextProvider>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={
            <ClosedRoute>

              <Login />
            </ClosedRoute>

          }

          />
          <Route path="/signup" element={

            <ClosedRoute>

              <Signup />
            </ClosedRoute>
          } />
          <Route path="/account" element={<ProtectedRoute>

            <Account />
          </ProtectedRoute>

          } />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
