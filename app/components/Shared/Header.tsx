import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tunjo Cars
        </Typography>
        <Link href="/vehicles">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vehículos
          </Typography>
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Testimonios
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Contacto
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
