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
import { getTestimonials } from "@/app/lib/testimonials";

interface TestimonialInterface {
  title: string;
  content: string;
  author: string;
  date: string;
  rating: number;
}

const Testimonials = async () => {
  const testimonials: TestimonialInterface[] = await getTestimonials();
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
