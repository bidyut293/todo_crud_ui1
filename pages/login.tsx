import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import LockPersonIcon from "@mui/icons-material/LockPerson";

const login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        backgroundColor: "#efefef",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "fit-content",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
        }}
      >
        <Box sx={{ padding: "30px 40px" }}>
          <LockPersonIcon sx={{ width: "30px", height: "30px" }} />
        </Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontSize: "30px", padding: "20px 40px" }}
        >
          Log In
        </Typography>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          sx={{ margin: "20px 40px" }}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          sx={{ margin: "20px 40px" }}
        />

        <Box
          sx={{
            margin: "40px 40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ padding: "10px 50px", fontSize: "15px" }}
          >
            Log In
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default login;
