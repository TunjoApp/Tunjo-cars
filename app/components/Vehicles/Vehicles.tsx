import React from "react";
import { Grid2, Typography } from "@mui/material";
import GridItem from "../GridItem/GridItem";
import { getVehicles } from "@/app/lib/vehicles";

// Define the vehicle data structure
export interface VehicleInterface {
  id: number;
  name: string;
  model: string;
  price: string;
  image: string;
}

interface AvailableVehiclesProps {
  limit?: number;
}

// ✅ This is an async Server Component
const AvailableVehicles = async ({ limit }: AvailableVehiclesProps) => {
  const vehicles: VehicleInterface[] = await getVehicles();

  return (
    <Grid2 sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        VEHÍCULOS USADOS DISPONIBLES
      </Typography>

      {vehicles.length === 0 ? (
        <Typography align="center" color="textSecondary">
          No hay vehículos disponibles en este momento.
        </Typography>
      ) : (
        <Grid2 container spacing={3} justifyContent="center">
          {vehicles.slice(0, limit ?? vehicles.length).map((vehicle) => (
            <GridItem key={vehicle.id} item={vehicle} />
          ))}
        </Grid2>
      )}
    </Grid2>
  );
};

export default AvailableVehicles;
