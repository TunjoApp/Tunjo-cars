import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const GridItem = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image="/path-to-vehicle-image.jpg"
        alt="Vehicle Image"
      />
      <CardContent>
        <Typography variant="h6">
          Toyota Sequoia Capstone Híbrida Modelo 2024
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: $560.000.000,00
        </Typography>
      </CardContent>
    </Card>
  );
};
export default GridItem;
