import { Container, Typography, Button, Box } from "@mui/material";
import logo from "../../assets/logo.png";
import woman from "../../assets/women.png";
import s from "./splash.module.css";

export default function Splash() {


  return (
    <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column" }}>
      <img
        src={logo}
        alt="Do it app logo"
        style={{
          maxWidth: "10rem",
          height: "auto",
          marginInline: "auto",
          zIndex: 10,
        }}
      />
      <Typography
        variant="h4"
        align="center"
        sx={{ zIndex: 10, fontWeight: "bold", fontSize: 25 }}
      >
        Your Journey Begins Now
      </Typography>
      <div
        style={{
          maxWidth: "100%",
          marginInline: "auto",
          alignSelf: "center",
          display: "flex",
        }}
      >
        <img
          src={woman}
          alt="Image of women"
          style={{
            maxWidth: "90%",
            height: "auto",
            marginInline: "auto",
          }}
        />
      </div>
      <div className={s.wrapper}>
        <div className={s.items}>
          <Typography variant="h6" color="white" fontSize="24px">
            Welcome
          </Typography>
          <Typography variant="subtitle1" color="white">
            Sign in to your registered account
          </Typography>
          <Box sx={{ border: "2px solid white", width: 42, borderRadius: 5 }} />
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 4,
              bgcolor: "white",
              color: "#3870FB",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#2E4577", color: "white" },
              display: "block",
              m: "1rem auto",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </Container>
  );
}
