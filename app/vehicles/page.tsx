import Vehicles from "@/src/components/Vehicles/VehiclesGridList";
import { Typography } from "@mui/material";

const VehiclesPage = () => {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        VEHÍCULOS USADOS DISPONIBLES
      </Typography>
      <Vehicles />
    </>
  );
};

export default VehiclesPage;
