import React from "react";
import { Typography, Box } from "@mui/material";
import Testimonials from "./components/Testimonials/Testimonials";
import VehiclesAvailable from "./components/Vehicles/Vehicles";

function App() {
  return (
    <div>
      <Box
        sx={{
          height: "400px",
          backgroundImage:
            "url(https://damian-bucket-aws-test.s3.us-east-2.amazonaws.com/20170628_135101.jpg)",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Pasión por los autos</Typography>
        <Typography variant="h4">
          Venta de vehículos de todas las gamas, encuéntralos en Tunjo Cars.
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Vehículos usados disponibles
        </Typography>
        <VehiclesAvailable limit={6} />
      </Box>

      <Testimonials />

      <Box sx={{ p: 3, backgroundColor: "#333", color: "white" }}>
        <Typography variant="h4" gutterBottom>
          La comunidad Tunjo Cars, nuestra razón de ser.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
