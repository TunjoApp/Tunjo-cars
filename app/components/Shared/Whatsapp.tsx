"use client";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
  return (
    <Fab
      color="success"
      aria-label="WhatsApp"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
      onClick={() =>
        window.open(
          "https://api.whatsapp.com/send?phone=573023333433&text=Hola%20me%20gustaria%20mas%20informacion%20de%20los%20autos%20disponibles",
          "_blank",
        )
      }
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppButton;
