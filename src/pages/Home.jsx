import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const useName = JSON.parse(localStorage.getItem("user"));
  //   console.log(useName);
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };
  return (
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
        HOME
      </Typography>
      <h1>Welcome {useName.name}</h1>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        sx={{ borderRadius: 3, marginTop: 3 }}
        onClick={handleLogout}
      >
        LOGOUT
      </Button>
    </Box>
  );
}

export default Home;
