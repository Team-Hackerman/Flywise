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
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const theme = createTheme();

export default function Form(props) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  const [selected, setSelected] = useState(2);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
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
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {props.result && (
          <div>
            {image && (
              <div className="flex">
                <img
                  src={`data:image/jpeg;base64,${image}`}
                  alt={"result-graph"}
                />
                <div>Metadata Here</div>
              </div>
            )}
            <div>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  props.setResult(false);
                }}
                startIcon={<ArrowBackIcon />}
              >
                Compute another case
              </Button>
            </div>
          </div>
        )}
        {!props.result && (
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 10,
              }}
              mt={6}
              mb={4}
              pt={3}
              pb={3}
              style={{ backgroundColor: "#e3f2fd", borderRadius: "20px" }}
              className="flex-col"
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
                  defaultValue={selected}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  className="overflow-y"
                  onChange={handleChange}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  {cases.map((c, index) => {
                    return (
                      <MenuItem value={index}>
                        <div> Case {index + 1}</div>
                      </MenuItem>
                    );
                  })}
                </Select>

                <Button
                  onClick={() => {
                    //TODO put reqest here

                    setLoading(true);
                    axios
                      .post("http://192.168.4.153:5000/result", {
                        compartment_conf: cases[selected],
                      })
                      .then((response) => {
                        setImage(response.data.image);
                        console.log()
                      })
                      .catch((error) => {
                        alert("Server Error");
                      });
                    setSelected(null);
                    setTimeout(() => {
                      setLoading(false);
                      props.setResult(true);
                    }, 2000);
                  }}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Compute COG and package locations
                </Button>
              </Box>
              <div className="flex-col">
                {selected != null ? (
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>
                            Case {selected + 1} Configuration
                          </StyledTableCell>
                          <StyledTableCell>No of units</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cases[selected].map((row, index) => {
                          return (
                            <>
                              <StyledTableRow key={index}>
                                Compartment {index + 1}
                              </StyledTableRow>

                              {Object.keys(row).map((compartment, i) => {
                                console.log(compartment);

                                return (
                                  <>
                                    <StyledTableRow key={i}>
                                      <StyledTableCell
                                        component="th"
                                        scope="row"
                                      >
                                        {compartment}
                                      </StyledTableCell>
                                      <StyledTableCell
                                        component="th"
                                        scope="row"
                                      >
                                        {row[compartment]}
                                      </StyledTableCell>
                                    </StyledTableRow>
                                  </>
                                );
                              })}
                            </>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : null}
              </div>
            </Box>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}
