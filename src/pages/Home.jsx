import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Home() {
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
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        sx={{ borderRadius: 3, marginTop: 3 }}
      >
        LOGOUT
      </Button>
    </Box>
  );
}

export default Home;
