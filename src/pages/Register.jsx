import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Login() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    // LocalStorage Logic
    localStorage.setItem("user", JSON.stringify(inputs));
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px grey"
          padding={3}
          borderRadius={5}
        >
          <Typography variant="h4" padding={3} className="heading">
            REGISTER
          </Typography>
          <TextField
            placeholder="Name....."
            value={inputs.name}
            onChange={handleChange}
            name="name"
            margin="normal"
            type={"text"}
            className="textfield"
            required
          />
          <TextField
            placeholder="Email....."
            value={inputs.email}
            onChange={handleChange}
            name="email"
            margin="normal"
            type={"email"}
            className="textfield"
            required
          />
          <TextField
            placeholder="Password....."
            value={inputs.password}
            onChange={handleChange}
            name="password"
            margin="normal"
            type={"password"}
            className="textfield"
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            SUBMIT
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ borderRadius: 3, marginTop: 3 }}
            onClick={() => navigate("/login")}
          >
            Already Register please Login
          </Button>
        </Box>
      </form>
    </>
  );
}

export default Login;
