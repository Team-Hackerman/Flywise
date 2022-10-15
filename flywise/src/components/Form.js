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
const theme = createTheme();

export default function Form() {
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />

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
                axios.post("");
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Compute COG and package locations
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
