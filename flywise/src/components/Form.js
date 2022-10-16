import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import Select from "@mui/material/Select";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const theme = createTheme();

export default function Form() {
  const [selected, setSelected] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [back, setback] = useState(false);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  const handleClose = () => {
    setLoading(false);
  };

  const cases = [
    [
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 8 },
      { PMC: 0, PAG: 0, AKE: 8 },
      { PMC: 0, PAG: 0, AKE: 1 },
    ],
    [
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 1, AKE: 6 },
      { PMC: 0, PAG: 0, AKE: 6 },
      { PMC: 0, PAG: 0, AKE: 1 },
    ],
    [
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 6 },
      { PMC: 0, PAG: 1, AKE: 6 },
      { PMC: 0, PAG: 0, AKE: 1 },
    ],
    [
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 1, PAG: 0, AKE: 5 },
      { PMC: 0, PAG: 1, AKE: 5 },
      { PMC: 0, PAG: 0, AKE: 1 },
    ],
    [
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 1, AKE: 5 },
      { PMC: 1, PAG: 0, AKE: 5 },
      { PMC: 0, PAG: 0, AKE: 1 },
    ],
    [
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 2, AKE: 3 },
      { PMC: 0, PAG: 1, AKE: 3 },
      { PMC: 0, PAG: 0, AKE: 1 },
    ],
    [
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 2, AKE: 3 },
      { PMC: 0, PAG: 2, AKE: 3 },
      { PMC: 0, PAG: 0, AKE: 1 },
    ],
    [
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 8 },
      { PMC: 0, PAG: 1, AKE: 4 },
      { PMC: 0, PAG: 0, AKE: 1 },
    ],
    [
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 2, AKE: 0 },
      { PMC: 0, PAG: 3, AKE: 0 },
      { PMC: 0, PAG: 0, AKE: 1 },
    ],
    [
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 0, AKE: 10 },
      { PMC: 0, PAG: 3, AKE: 0 },
      { PMC: 0, PAG: 2, AKE: 0 },
      { PMC: 0, PAG: 0, AKE: 1 },
    ],
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {result && (
          <div>
            <div>Results are here</div>
            <div>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  setResult(false);
                }}
                startIcon={<ArrowBackIcon />}
              >
                Compute another case
              </Button>
            </div>
          </div>
        )}
        {!result && (
          <Box
            borderColor="grey.500"
            sx={{
              marginTop: 8,
              display: "flex",
              minWidth: 500,
              flexDirection: "column",
              alignItems: "center",
              borderColor: "primary.main",
              border: "5px solid",
              p: 10,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AirplanemodeActiveIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Center of gravity optimizer
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Typography component="h1" variant="h7">
                Select a case to proceed
              </Typography>
              <Select
                margin="normal"
                required
                fullWidth
                id="email"
                className="overflow-y"
                onChange={handleChange}
              >
                {cases.map((c, index) => {
                  return (
                    <MenuItem value={index}>
                      <div className="flex-col">
                        <div> Case {index + 1}</div>
                        <div className="flex-col">
                          {c.map((compartment, ind) => {
                            return (
                              <div className="flex-col">
                                <div>Compartment {ind + 1}</div>{" "}
                                <div>
                                  PAG:{compartment.PAG} PMC:{compartment.PAG}
                                  AKE:{compartment.AKE}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>{" "}
                    </MenuItem>
                  );
                })}
              </Select>

              <Button
                onClick={() => {
                  //TODO put reqest here
                  console.log(cases[selected]);
                  setLoading(true);
                  axios.post("");
                  setTimeout(() => {
                    setLoading(false);
                    setResult(true);
                  }, 2000);
                }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Compute COG and package locations
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}
