import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import html2 from "@/public/assets/html.png";
import css2 from "@/public/assets/css.png";
import javascript from "@/public/assets/javascript.png";
import nodejs from "@/public/assets/nodejs.png";
import redux from "@/public/assets/redux.png";
import reactjs from "@/public/assets/reactjs.png";
import git from "@/public/assets/git.png";
import bootstrap from "@/public/assets/bootstrap.png";
import xd from "@/public/assets/xd.jpg";
import mui from "@/public/assets/mui.png";
import threejs from "@/public/assets/three.png";
import firebase from "@/public/assets/firebase.png";
import vuejs from "@/public/assets/vue.png";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 / Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon.src} />
      <Preload all />
    </Canvas>
  );
};

const Tech = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: html2,
    },
    {
      name: "CSS 3",
      icon: css2,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: vuejs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Material UI",
      icon: mui,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Adobe XD",
      icon: xd,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    // Rest of the technologies
  ];

  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          color: "white",
          fontWeight: "900",
          fontSize: "4rem",
          marginY: "4rem",
          paddingX: { md: "4rem", xs: "0%" },
        }}
      >
        SKILLS
      </Typography>
      <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
        {technologies.map((technology) => (
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            sx={{ paddingY: "1rem" }}
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tech;
