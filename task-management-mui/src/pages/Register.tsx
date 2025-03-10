import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3010/register", { username, password });
      alert(response.data);
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Register</Typography>
      <TextField fullWidth label="Username" value={username} onChange={(e) => setUsername(e.target.value)} margin="normal" />
      <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" />
      <Button variant="contained" color="primary" onClick={handleRegister} fullWidth>Register</Button>
    </Container>
  );
};

export default Register;
