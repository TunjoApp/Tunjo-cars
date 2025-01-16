import { Typography } from "@mui/material";
import Testimonials from "@components/Testimonials/Testimonials";

const TestimonialsPage = () => {
  return (
    <div>
      <h1>Testimonials</h1>
      <Typography variant="body1">
        Here are some testimonials from our customers:
      </Typography>
      <Testimonials />
    </div>
  );
};

export default TestimonialsPage;
