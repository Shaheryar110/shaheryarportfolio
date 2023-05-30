import React from "react";
import { motion } from "framer-motion";
import { Box, Stack, Typography } from "@mui/material";
import { textVariant } from "@/utils/motion";
// import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import slash from "../public/assets/4slash.png";
import Image from "next/image";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "MERN Stack Developer",
      company_name: "4-Slash , Karachi",
      icon: slash,
      iconBg: "#383E56",
      date: "Aug 2022 - Currently Working",
      points: [
        "Developing and maintaining web",
        "applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      id: 2,
      title: "MERN Stack Intern Ship",
      company_name: "4-Slash , Karachi",
      icon: slash,
      iconBg: "#383E56",
      date: "Aug 2022 - feb 2023",
      points: [
        "Developing and maintaining web",
        "applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  return (
    <>
      <Box sx={{ paddingX: { md: "4rem", xs: "0%" } }}>
        <motion.div variants={textVariant()}>
          <Typography
            sx={{
              textAlign: "left",
              marginTop: "1rem",
              color: "rgb(210, 206, 206)",
              fontSize: "1.4rem",
              maxWidth: "48rem",
              lineHeight: "1.875rem",
              fontFamily: "poppins",
            }}
          >
            What I Have Done
          </Typography>
          <Typography
            className="sectionHeading"
            sx={{
              textAlign: "left",
              color: "white",
              fontWeight: "900",
              fontSize: "2rem",
            }}
          >
            Work Experience
          </Typography>
        </motion.div>
        <Box
          mt={10}
          display="flex"
          flexDirection="column"
          // sx={{ paddingY: "1rem" }}
        >
          <VerticalTimeline>
            {experiences.map((element) => {
              return (
                <VerticalTimelineElement
                  contentStyle={{
                    background: "#1d1836",
                    color: "#fff",
                    borderRight: "7px solid  #232631",
                  }}
                  contentArrowStyle={{ borderRight: "20px solid  #232631" }}
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={{ background: element.iconBg }}
                  icon={
                    <Box
                      sx={{
                        backgroundColor: element.iconBg,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <Image
                        src={element.icon}
                        alt="timeline icon"
                        width={45}
                        height={45}
                        style={{ marginTop: "0.1rem" }}
                      />
                    </Box>
                  }
                >
                  <Box
                    sx={
                      {
                        // width: "100vw",
                        // height: "50vh",
                        // border: "2px solid white",
                      }
                    }
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: "white",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      {element.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "secondary",
                        fontSize: "1.2rem",
                        fontWeight: "500",
                        margin: 0,
                        width: "40vw",
                        overflow: "clip",
                      }}
                    >
                      {element.company_name}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="Description"
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "500",
                        marginTop: "10px",
                        overFlowX: "hidden",
                        paddingRight: "0.2rem",
                        // width: "100%",
                      }}
                    >
                      {element.points}
                    </Typography>
                  </Box>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </Box>
      </Box>
    </>
  );
};

export default WorkExperience;
