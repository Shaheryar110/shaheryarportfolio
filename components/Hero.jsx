// import React from "react";
import { motion } from "framer-motion";
// import lottie from "lottie-web";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
// import { useEffect } from "react";
// import HeroAnimate from "../lottieFILES/heroOct.json";
import robots from "../lottieFILES/robots.json";
import Lottie from "react-lottie-player";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Hero() {
  // useEffect(() => {
  //   const animation = lottie.loadAnimation({
  //     container: document.querySelector(".hero"),
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     path: `${HeroAnimate}`,
  //   });
  // }, []);
  return (
    <>
      <Stack
        sx={{
          // top: "30%",
          // left: "10",
          // width: "100%",
          // height: "100%",
          // alignItems: "center",
          marginTop: "5rem",
        }}
      >
        <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
          <Grid
            item
            lg={8}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                paddingX: { xs: "0.5rem", sm: "1rem" },
                // position: "absolute",
                inset: "0px",
                // top: "7rem",
                // marginX: "auto",
                display: "flex",
                flexDirection: "row",
                // gap: "2rem",
                alignItems: "start",
                justifyContent: "start",
              }}
            >
              {/* //Line styling */}
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <Stack
                  sx={{
                    width: "1.6rem",
                    height: "1.6rem",
                    borderRadius: "50%",
                    marginBottom: "-0.2rem",
                  }}
                  className="violet-gradient-circle"
                />
                <Stack
                  sx={{
                    width: "0.5rem",
                    height: { xs: "25vh", sm: "30vh" },
                  }}
                  className="violet-gradient"
                />
              </Stack>
              <Stack
                sx={{
                  height: "50vh",
                  marginTop: "3rem",
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontSize: {
                      // lg: "80px",
                      sm: "50px",
                      xs: "20px",
                    },
                    marginX: "1rem",
                    fontWeight: "800",
                  }}
                >
                  Hello , I'm <br />
                  <Typography
                    variant="span"
                    sx={{
                      fontSize: {
                        // lg: "80px",
                        sm: "50px",
                        xs: "35px",
                      },
                      color: "#804dee",
                      width: "100%",
                    }}
                  >
                    MUHAMMAD SHAHERYAR
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    marginX: "1.1rem",
                    fontSize: "1.4rem",
                    textAlign: "justify",
                  }}
                >
                  I Develop Front End & Back End Of Web Application Using
                  Multiple FrameWorks .{" "}
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: { sm: "row", xs: "column" },
                    gap: { md: "1rem", xs: "0.5rem" },
                    marginLeft: "1.1rem",
                    marginTop: "1rem",
                    width: { sm: "100%", xs: "50%" },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      marginY: "0.1rem",
                      backgroundColor: "#804dee",
                      ":hover": { backgroundColor: "#6630db" },
                    }}
                  >
                    Download CV
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      marginY: "0.1rem",
                      color: "white",
                      borderColor: "white",
                      ":hover": {
                        backgroundColor: "#804dee",
                        borderColor: "#804dee",
                      },
                      // marginTop: { sm: "0%", xs: "1rem" },
                    }}
                  >
                    View Projects{" "}
                    <ArrowCircleRightIcon
                      sx={{ marginX: "0.3rem", padding: "0.1rem" }}
                    />
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Box
              sx={{
                marginTop: { lg: "3rem", sm: "1rem" },
                display: { lg: "block", xs: "none" },
              }}
            >
              <Lottie
                loop
                animationData={robots}
                play
                style={{
                  width: { lg: "20rem", sm: "15rem" },

                  height: "20rem",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default Hero;
