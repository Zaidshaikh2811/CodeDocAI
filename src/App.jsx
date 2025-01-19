import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/Landing";
import MarkdownViewer from "./pages/Markdown";
import useAuthStore from "./store/useUser";
import Footer from "./components/Footer";

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Redirect to LandingPage if not authenticated
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <div className="w-full text-gray-900 min-h-screen overflow-hidden">
        {/* Navbar is outside Routes to appear on all pages */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Protected Route */}
          <Route
            path="/markdown"
            element={
              <ProtectedRoute>
                <MarkdownViewer githubLink="" />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
