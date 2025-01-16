import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import GridItem from "../GridItem/GridItem";
const vehicles = [
  {
    id: 1,
    name: "Toyota Sequoia Capstone Híbrida Modelo 2024",
    model: "2024",
    price: "$560.000.000,00",
    image:
      "https://damian-bucket-aws-test.s3.us-east-2.amazonaws.com/20170628_135101.jpg",
  },
  {
    id: 2,
    name: "Audi A4 Modelo 2017",
    model: "2017",
    price: "$80.000.000,00",
    image:
      "https://damian-bucket-aws-test.s3.us-east-2.amazonaws.com/20170628_135101.jpg",
  },
  {
    id: 3,
    name: "Ford Ranger Raptor Modelo 2023",
    model: "2023",
    price: "$260.000.000,00",
    image:
      "https://damian-bucket-aws-test.s3.us-east-2.amazonaws.com/20170628_135101.jpg",
  },
  {
    id: 4,
    name: "Land Rover Range Rover Velar P380 SE Modelo 2019",
    model: "2019",
    price: "$230.000.000,00",
    image:
      "https://damian-bucket-aws-test.s3.us-east-2.amazonaws.com/20170628_135101.jpg",
  },
  {
    id: 5,
    name: "BMW X6 xDrive35I Modelo 2018",
    model: "2018",
    price: "$160.000.000,00",
    image:
      "https://damian-bucket-aws-test.s3.us-east-2.amazonaws.com/20170628_135101.jpg",
  },
  {
    id: 6,
    name: "BMW M240I Coupé Modelo 2020",
    model: "2020",
    price: "$145.000.000,00",
    image:
      "https://damian-bucket-aws-test.s3.us-east-2.amazonaws.com/20170628_135101.jpg",
  },
  {
    id: 7,
    name: "Audi Q3 S-line Black Edition Modelo 2018",
    model: "2018",
    price: "$93.000.000,00",
    image:
      "https://damian-bucket-aws-test.s3.us-east-2.amazonaws.com/20170628_135101.jpg",
  },
  {
    id: 8,
    name: "Toyota Corolla XEI Híbrido Modelo 2022",
    model: "2022",
    price: "$93.000.000,00",
    image:
      "https://damian-bucket-aws-test.s3.us-east-2.amazonaws.com/20170628_135101.jpg",
  },
];
const VehiclesAvailable = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        VEHÍCULOS USADOS DISPONIBLES
      </Typography>
      <Grid container spacing={3}>
        {vehicles.map((vehicle) => (
          <GridItem key={vehicle.id} item={vehicle} />
        ))}
      </Grid>
    </Box>
  );
};

export default VehiclesAvailable;
