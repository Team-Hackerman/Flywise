import React from 'react';
import bannerlogo from '../assets/heckermen.png';
import { Box, Button, Container, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';


const Main = () => {
  return (
    <Container>
            <Box sx={{ textAlign: "center" }}>
                <Box mt={6} mb={4} pt={3} pb={3} style={{ backgroundColor: "#e3f2fd", borderRadius: "20px" }}>
                    <Box justifyContent="center" mb={2}>
                        <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                            Lorem Ipsum
                        </Box>
                    </Box>
                    <Box mt={2}>
                        <Typography variant='body1' sx={{ mx: 4 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </Typography>
                    </Box>
                    <Box mt={5} fontSize="h6.fontSize" fontWeight={400} fontFamily="Monospace">
                        This app is built by: <br /> 
                        <Link href="#" color="inherit" target="_blank" rel="noopener" underline="hover">Anurag Ghosh</Link>, {" "}
                        <Link href="#" color="inherit" target="_blank" rel="noopener" underline="hover">Harsh Jain</Link>, {" "}
                        <Link href="#" color="inherit" target="_blank" rel="noopener" underline="hover">Ishan Kulkarni</Link>, {" "}
                        <Link href="#" color="inherit" target="_blank" rel="noopener" underline="hover">Samved Joshi</Link>, {" "}
                        <Link href="#" color="inherit" target="_blank" rel="noopener" underline="hover">Naman Shah</Link> {" and "}
                        <Link href="#" color="inherit" target="_blank" rel="noopener" underline="hover">Yash Chaudhari</Link>
                    </Box>
                    <Box mt={3}>
                        <Link href="#" color="inherit" target="_blank" rel="noopener" underline="hover">
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
  )
}

export default Main