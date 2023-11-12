import React from "react";
import TourCard from "../components/TourCard/TourCard";
import { Container, Grid, Typography } from "@mui/material";
import cities from "../data.json";
export default function Home() {
  return (
    <>
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              key={city.id}
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={2}>
              {city.tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
}
