import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
// import { styles } from "../styles";
import { github } from "../public/assets/github.png";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
// import { carrent } from "@/public/assets/carrent.png";
import austin from "../public/austin.png";
import meribilty from "../public/meribilty.png";
import komplai from "../public/komplai.png";
import fues from "../public/fues.png";

const Works = () => {
  const projects = [
    {
      name: "MeriBilty",
      description:
        "Meribilty is situating itself to be the main accomplice of decision for all partners in the logistic sector by offering a completely coordinated digitalized stage for clients chasing and giving goods transportation services. Developing and implementing technology solutions is a core pillar for Meribilty. We are upgrading the utilization of innovation to drive efficiencies joined forces with driving innovation organizations to foster frameworks offering best-in-class administration and client experience. ",
      tags: [
        {
          name: "react",
          color: "#2f80ed",
        },
        {
          name: "mongodb",
          color: "#38ef7d",
        },
        {
          name: "Material Ui",
          color: "#ec008c",
        },
      ],
      image: meribilty,
      source_code_link: "https://web.meribilty.com/",
    },
    {
      name: "Rodio App",
      description:
        "Our mission is to increase the safety, efficiency, and sustainability of the operations that power the global economy. We are the pioneer of the Connected Operations Cloud, which allows organizations that depend on physical operations to harness IoT data to develop actionable insights and improve their operations. Werner CIO Looks to Outfit Company Trucks With AI-Enabled Tech.Werner CIO Looks to Outfit Company Trucks With AI-Enabled Tech",
      tags: [
        {
          name: "React js",
          color: "#2f80ed",
        },
        {
          name: "Node js",
          color: "#38ef7d",
        },
        {
          name: "Tailwind CSS",
          color: "#ec008c",
        },
      ],
      image: fues,
      source_code_link: "https://web.meribilty.com/",
    },
    {
      name: "Austin Trim ",
      description:
        "Austin Trim is an easy and online manufacturing platform that meets the needs of apparel manufacturers, boutiques, cut & sew apparel & street wear brands. We offer customers a wide range of options to pick and choose from, with low minimums and affordable pricing. From apparel and accessories to labels and packaging, giving customers high quality artwork setup and designing services, Austin Trim is one of the most liked and recommended platform for all labels and trim solutions.",
      tags: [
        {
          name: "Vue js",
          color: "#2f80ed",
        },
        {
          name: "Fire Base",
          color: "#38ef7d",
        },
        {
          name: "Material Ui",
          color: "#ec008c",
        },
      ],
      image: austin,
      source_code_link: "studio.austintrim.co",
    },
    {
      name: "Komplai",
      description:
        "Komplai restores order to chaos, ensuring you are kept updated on developments across the sector. Komplai digests regulatory information from multiple intersecting sources and feeds this back intelligently so that you can stay on track with compliance requirements.",
      tags: [
        {
          name: "Next js",
          color: "#2f80ed",
        },
        {
          name: "Three js",
          color: "#38ef7d",
        },
        {
          name: "Material Ui",
          color: "#ec008c",
        },
      ],
      image: komplai,
      source_code_link: "komplai-next.vercel.app",
    },
  ];
  const ProjectCard = ({ index, name, description, tags, image }) => {
    return (
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "sans-serif",
          // paddingX: { md: "4rem", xs: "0%" },
          // animation: `${fadeIn("up", "spring", index * 0.5, 0.75)} 0.5s ease`,
        }}
      >
        <div
          style={{
            // position: "relative",
            width: "100%",
            height: "230px",
            padding: "1rem",
          }}
        >
          <Image
            src={image}
            alt="project_image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </div>

        <div style={{ marginTop: "0.5rem", padding: "1rem" }}>
          <h3
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "2rem",
              fontFamily: "sans-serif",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              marginTop: "0.5rem",
              color: "secondary",
              fontSize: "1rem",
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            marginBottom: "0.75rem",
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            fontSize: "1rem",
            textAlign: "left",
            fontFamily: "poppins",
          }}
        >
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              style={{
                fontSize: "1rem",
                color: `${tag.color}`,
                textAlign: "left",
              }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    );
  };
  return (
    <>
      <Box sx={{ paddingX: { md: "4rem", xs: "0%" } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "left",
            color: "white",
            fontWeight: "900",
            fontSize: "4rem",
            marginY: "3rem",
          }}
        >
          Projects.
        </Typography>

        <Box sx={{ width: "100%", display: "flex" }}>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            style={{
              // mt: 3,
              color: "#888",
              fontSize: "1.5rem",
              // maxWidth: "3xl",
              lineHeight: "30px",
              fontFamily: "sans-serif",
            }}
          >
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </Box>

        <Box sx={{ marginTop: "3rem" }}>
          <Grid
            container
            gap={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            {projects.map((project, index) => {
              return (
                <Grid
                  item
                  lg={3}
                  md={4}
                  sx={{
                    backgroundColor: "#151030",
                    borderRadius: "1rem",
                    padding: "0px",
                  }}
                >
                  <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    name={project.name}
                    description={project.description}
                    tags={project.tags}
                    image={project.image}
                    source_code_link={project.source_code_link}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Works;
