import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";

const navItems = [
  { label: "Vehículos", path: "/vehicles" },
  { label: "Testimonios", path: "/testimonials" },
  { label: "Contacto", path: "/contact" },
];

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar>
        {/* Site Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
            <Image
              src="/tunjo-cars/logo-word.png"
              alt="Tunjo Cars"
              width={150}
              height={50}
            />
          </Link>
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.path}
              color="inherit"
              sx={{ textTransform: "none" }} // Keeps text as normal case
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
