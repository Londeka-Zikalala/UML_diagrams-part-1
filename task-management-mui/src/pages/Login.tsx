import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../Types/User";
// import { User } from "../types/User";

interface LoginProps {
  setUser: (user: User | null) => void;
}

const Login: React.FC<LoginProps> = ({ setUser }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post<User | null>("http://localhost:3011/login", { username, password });
      if (response.data) {
        setUser(response.data);
        navigate("/tasks");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField fullWidth label="Username" value={username} onChange={(e) => setUsername(e.target.value)} margin="normal" />
      <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" />
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>Login</Button>
    </Container>
  );
};

export default Login;
