import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 3,
        backgroundColor: "#333",
        textAlign: "center",
        mt: "auto", // Pushes footer to bottom
      }}
    >
      <Typography variant="body1">
        © 2025 Tunjo Cars. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
