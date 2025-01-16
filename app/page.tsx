import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import GridItem from "./components/GridItem/GridItem";

function App() {
  return (
    <div>
      <Box
        sx={{
          height: "400px",
          backgroundImage: "url(/path-to-hero-image.jpg)",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography variant="h3">Pasión por los autos</Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Vehículos usados disponibles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <GridItem />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ p: 3, backgroundColor: "#f5f5f5" }}>
        <Typography variant="h4" gutterBottom>
          La comunidad Autos 93, nuestra razón de ser.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
