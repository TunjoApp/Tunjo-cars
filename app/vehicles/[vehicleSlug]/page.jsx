import { getAllVehicleIds, getVehicle } from "@/src/lib/vehicles";
import { Box, Typography, Grid, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const allVehicleIds = await getAllVehicleIds();

  return allVehicleIds.map((id) => ({
    vehicleSlug: id,
  }));
}

export default async function SpecificVehiclePage({ params }) {
  const { vehicleSlug } = await params;

  if (!vehicleSlug) {
    throw new Error("Invalid vehicle ID");
  }

  const carDetails = await getVehicle(vehicleSlug);

  return (
    <Grid
      container
      spacing={4}
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        py: 4,
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid item xs={12} md={5}>
        <Typography variant="h5" fontWeight="bold">
          {carDetails.name}
        </Typography>
        <Typography variant="h4" color="error" fontWeight="bold" mt={1}>
          {carDetails.price}
        </Typography>

        <Box mt={3}>
          {[
            { label: "Marca", value: carDetails.brand },
            { label: "Modelo", value: carDetails.model },
            { label: "Año", value: carDetails.year },
            { label: "Versión", value: carDetails.version },
            { label: "Tracción", value: carDetails.traction },
            { label: "Motor", value: carDetails.motor },
            { label: "Combustible", value: carDetails.fuel },
            { label: "Transmisión", value: carDetails.transmission },
            { label: "Kilómetros", value: carDetails.kilometers },
            { label: "Blindaje", value: carDetails.armor },
          ].map((item, index) => (
            <Typography key={index} variant="body1" sx={{ my: 0.5 }}>
              <strong>{item.label}:</strong> {item.value}
            </Typography>
          ))}
        </Box>

        <Box mt={3}>
          <Typography variant="subtitle1" fontWeight="bold">
            Contacta a un asesor
          </Typography>
          <Button
            variant="contained"
            color="error"
            startIcon={<WhatsAppIcon />}
            sx={{ mt: 2, width: "100%" }}
          >
            WhatsApp
          </Button>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth>
                Retoma
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth>
                Financiación
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Link href="/vehicles">
          <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
            Volver
          </Button>
        </Link>
      </Grid>

      <Grid item xs={12} md={7}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <Image
            src="https://damian-bucket-aws-test.s3.us-east-2.amazonaws.com/20170628_135101.jpg"
            alt="Car"
            style={{ width: "100%", borderRadius: "8px" }}
            width={800}
            height={600}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
