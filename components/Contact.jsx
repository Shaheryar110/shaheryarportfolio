import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import {
//   Box,
//   Typography,
//   TextField,
//   TextareaAutosize,
//   Button,
// } from "@material-ui/";
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  Grid,
} from "@mui/material";
import EarthCanvas from "./canvas/Earth";
// import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginY: "6rem", paddingX: { md: "4rem", xs: "0.5rem" } }}
    >
      <Grid
        item
        lg={6}
        sx={{ display: "flex", width: "100%", alignItems: "center" }}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          style={{
            flex: "0.75",
            backgroundColor: "#151030",
            //   padding: 8,
            padding: "3.5rem",
            borderRadius: "30px",
            color: "#CEBBB8",
          }}
        >
          <Typography sx={{ color: "#804DEE" }} variant="subtitle1">
            Get in touch
          </Typography>
          <Typography variant="h3">Contact.</Typography>

          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <label htmlFor="name">
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "1.3rem",
                  color: "#804DEE",
                  fontWeight: "medium",
                  marginBottom: 1,
                }}
              >
                Your Name
              </Typography>
              <TextField
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                // color="#aaa6c3"
                sx={{
                  // backgroundColor: "grey",
                  width: "100%",
                  "& input::placeholder": {
                    color: "#804DEE",
                    fontSize: "1.3rem", // Replace with your desired color
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#CEBBB8",
                      borderRadius: "1.3rem",
                      // Replace with your desired color
                    },
                  color: "#804DEE",
                  borderRadius: "1.3rem",
                  outline: "none",
                  border: "1px solid #804DEE",
                  fontWeight: "medium",
                }}
              />
            </label>
            <label htmlFor="email">
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "1.3rem",
                  color: "#804DEE",
                  fontWeight: "medium",
                  marginBottom: 1,
                }}
              >
                Your email
              </Typography>
              <TextField
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                sx={{
                  // backgroundColor: "grey",
                  width: "100%",
                  "& input::placeholder": {
                    color: "#804DEE",
                    fontSize: "1.3rem", // Replace with your desired color
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#CEBBB8",
                      borderRadius: "1.3rem",
                      // Replace with your desired color
                    },
                  color: "#804DEE",
                  borderRadius: "1.3rem",
                  outline: "none",
                  border: "1px solid #804DEE",
                  fontWeight: "medium",
                }}
              />
            </label>
            <label htmlFor="message">
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#804DEE",
                  fontWeight: "medium",
                  marginBottom: 1,
                  fontSize: "1.3rem",
                }}
              >
                Your Message
              </Typography>
              <TextField
                id="message"
                // rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                sx={{
                  height: "200px",
                  // backgroundColor: "grey",
                  width: "100%",
                  "& input::placeholder": {
                    color: "#804DEE",
                    fontSize: "1.3rem", // Replace with your desired color
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#CEBBB8",
                      borderRadius: "1.3rem",
                      height: "203px",

                      // Replace with your desired color
                    },
                  color: "#CEBBB8",
                  borderRadius: "1.3rem",
                  outline: "none",
                  border: "1px solid #804DEE",
                  fontWeight: "medium",
                }}
              />
            </label>

            <Button
              type="submit"
              sx={{
                backgroundColor: "#804DEE",
                paddingY: 2,
                paddingX: 5,
                borderRadius: "1.2rem",
                "&:hover": {
                  backgroundColor: "#CEBBB8", // Replace with your desired color
                },
                width: "fit-content",
                color: "white",
                fontWeight: "bold",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                shadowColor: "#050816",
              }}
            >
              Send Message
              {/* {loading ? "Sending..." : "Send"} */}
            </Button>
          </Box>
        </motion.div>
      </Grid>
      <Grid item lg={6}>
        <Box
          variants={slideIn("right", "tween", 0.2, 1)}
          sx={{
            // flex: { xl: 1, md: "auto" },
            height: { md: "650px", xs: "350px" },
          }}
        >
          <EarthCanvas />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
