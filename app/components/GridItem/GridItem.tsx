import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Image from "next/image";

const GridItem = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia>
        <Image
          src="https://damian-bucket-aws-test.s3.us-east-2.amazonaws.com/20170628_135101.jpg"
          alt={item.name || "Vehicle"}
          width={345}
          height={200}
          layout="responsive"
        />
      </CardMedia>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {item.name || "Unknown Vehicle"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price || "Price not available"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GridItem;
