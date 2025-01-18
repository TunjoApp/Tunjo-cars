import React from "react";
import { Grid2, Typography } from "@mui/material";
import VehicleGridItem from "@/src/components/GridItems/VehicleGridItem";
import { getVehicles } from "@/src/lib/vehicles";

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
      {vehicles.length === 0 ? (
        <Typography align="center" color="textSecondary">
          No hay vehículos disponibles en este momento.
        </Typography>
      ) : (
        <Grid2 container spacing={3} justifyContent="center">
          {vehicles.slice(0, limit ?? vehicles.length).map((vehicle) => (
            <VehicleGridItem key={vehicle.id} item={vehicle} />
          ))}
        </Grid2>
      )}
    </Grid2>
  );
};

export default AvailableVehicles;
