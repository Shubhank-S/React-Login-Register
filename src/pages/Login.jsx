import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Login() {
  const [inputs, setInputs] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    console.log(loggedUser);
    if (
      inputs.email === loggedUser.email &&
      inputs.password === loggedUser.password
    ) {
      navigate("/");
    } else {
      alert("Error");
    }
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
            LOGIN
          </Typography>

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
        </Box>
      </form>
    </>
  );
}

export default Login;
