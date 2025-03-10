import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import { User } from "./Types/User";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/tasks" element={user ? <Tasks user={user} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

