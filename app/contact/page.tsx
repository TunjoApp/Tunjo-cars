import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import Image from "next/image";

const contactDetails = [
  {
    title: "Dirección",
    details: ["Calle Siempre Viva 123, Bogotá D.C"],
  },
  {
    title: "Ventas de vehículos",
    details: [
      "Cristian Tovar - Gerente",
      "Gustavo de la Rosa - ### ### ####",
      "Damian Bejarano - ### ### ####",
    ],
  },
];

const Contact = () => {
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      {/* Title */}
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Contáctanos
      </Typography>

      {/* Description */}
      <Typography align="center" paragraph>
        Si tienes cualquier duda acerca de nuestros vehículos o servicios, no
        dudes en visitarnos o contactarnos:
      </Typography>

      {/* Contact Details */}
      <Grid container spacing={2}>
        {contactDetails.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="h6" fontWeight="bold">
              {section.title}
            </Typography>
            {section.details.map((detail, idx) =>
              detail.includes("@") ? (
                <Typography key={idx}>
                  <Link
                    href={`mailto:${detail}`}
                    color="primary"
                    underline="hover"
                  >
                    {detail}
                  </Link>
                </Typography>
              ) : detail.match(/\d{3} \d{3} \d{4}/) ? (
                <Typography key={idx}>
                  <Link
                    href={`tel:+57${detail.replace(/\s+/g, "")}`}
                    color="primary"
                    underline="hover"
                  >
                    {detail}
                  </Link>
                </Typography>
              ) : (
                <Typography key={idx}>{detail}</Typography>
              )
            )}
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Image
          src="/image.png"
          alt="Tunjo Cars Location"
          width={600}
          height={300}
          style={{ borderRadius: 8, objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
