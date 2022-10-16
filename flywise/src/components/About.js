import React from "react";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../assets/heckermen.png";
const About = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Box
          mt={6}
          mb={4}
          pt={3}
          pb={3}
          style={{ backgroundColor: "#e3f2fd", borderRadius: "20px" }}
          className="flex-col"
        >
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 250, md: 180 },
              maxWidth: { xs: 350, md: 250 },
              align: "center",
            }}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
            alt="Challenge Logo"
            src={Logo}
          />
          <Box justifyContent="center" mb={2}>
            <Box sx={{ fontSize: "h4.fontSize", fontWeight: "regular" }}>
              Sustainable Air Cargo Optimization
            </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="body1" sx={{ mx: 4 }}>
            Aviation accounts for 2.5% of global CO2 emissions. Like other emissions resulting from fossil fuel combustion, aircraft engines produce gases, noise, and particulates, raising environmental concerns. These emissions are directly proportional to the weight of the aircraft. The weight of an object depends on the overall size of the aircraft, along with passengers and cargo.Although the weight of the passengers cannot be optimized without affecting the commercial charges, the load on the aircrafts can surely be reduced by optimizing and scheduling  the load in such a way  that  the weight is  distributed  in the aircraft i.e.  it has its center of gravity  closer to the Optimised CoG. 
            </Typography>
          </Box>
          <Box
            mt={5}
            fontSize="h6.fontSize"
            fontWeight={400}
            fontFamily="Monospace"
          >
            This app is built by: <br />
            <Link
              href="https://github.com/Anu26092002"
              color="inherit"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              Anurag Ghosh
            </Link>
            ,{" "}
            <Link
              href="https://github.com/harsh3401"
              color="inherit"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              Harsh Jain
            </Link>
            ,{" "}
            <Link
              href="#"
              color="inherit"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              Ishan Kulkarni
            </Link>
            ,{" "}
            <Link
              href="https://github.com/samvedjoshi"
              color="inherit"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              Samved Joshi
            </Link>
            ,{" "}
            <Link
              href="https://github.com/shadyskies"
              color="inherit"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              Naman Mehta
            </Link>{" "}
            {" and "}
            <Link
              href="https://github.com/YashChaudhari241"
              color="inherit"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              Yash Chaudhari
            </Link>
          </Box>
          <Box mt={3}>
            <Link
              href="https://github.com/Team-Hackerman/Flywise"
              color="inherit"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              <Button
                variant="outlined"
                display="inline"
                color="inherit"
                startIcon={<GitHubIcon />}
              >
                Source Code
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
