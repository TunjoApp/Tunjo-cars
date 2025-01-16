import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    title: "Un Verdadero PetrolHead",
    content:
      "Desde el primer momento que ingresas a Tunjo Cards Felipe te contagia de su pasión por los autos, su atención a cada detalle, y la forma en que te entrega toda la información sobre el vehículo de tu interés, hace que todo sea una experiencia. Super Recomendado",
    author: "Alejandro Rothschild",
    date: "29-May-2020",
    rating: 5,
  },
  {
    title: "Nuestra primera opción",
    content:
      "Tunjo Cards y Felipe en especial, siempre nos han tratado como familia. Transparencia en todo el proceso, muy recomendados!",
    author: "Gabriel Bojanini",
    date: "13-Feb-2020",
    rating: 5,
  },
  {
    title: "Servicio De Excelencia",
    content:
      "En Tunjo Cards recibí una atención excelente para las soluciones de vehículos. Carolina Montoya nos colaboró con todos los procesos y requerimientos de importación, compra y venta de vehículos de alta gama.",
    author: "Derca SAS",
    date: "29-May-2020",
    rating: 5,
  },
  {
    title: "Una amistad que nació en los negocios",
    content:
      "En Tunjo Cards más que buenos autos, encontramos unos grandes amigos, los negocios no pueden ser solo transacciones, Pipe y su equipo lo saben!!!",
    author: "Ruben Darío Villegas",
    date: "25-Nov-2019",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
        TESTIMONIOS DE NUESTROS CLIENTES
      </Typography>
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {testimonial.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {testimonial.content}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 24,
                      height: 24,
                      fontSize: 14,
                      mr: 1,
                    }}
                  >
                    {testimonial.author[0]}
                  </Avatar>
                  <Typography variant="subtitle2">
                    {testimonial.author}
                  </Typography>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  {testimonial.date}
                </Typography>
                <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <StarIcon key={i} sx={{ color: "gold", fontSize: 16 }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 4, color: "text.secondary" }}
      >
        Powered by{" "}
        <a href="https://c1g.com" target="_blank" rel="noopener noreferrer">
          C1g
        </a>
      </Typography>
    </Box>
  );
};

export default Testimonials;
