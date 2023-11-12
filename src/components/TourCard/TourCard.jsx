import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const CustomLink = ({ to, children }) => (
  <RouterLink to={to} style={{ textDecoration: "none" }}>
    {children}
  </RouterLink>
);
export default function TourCard({ tour }) {
  return (
    <Grid xs={3} item>
      <CustomLink to={`/tour?id=${tour.id}&name=${encodeURIComponent(tour.name)}`}>
        <ThemeProvider theme={theme}>
          <Paper elevation={3}>
            <img className="img" src={tour.image} alt="" />
            <Box paddingX={1}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ width: 12.5 }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <Rating
                  name="read-only"
                  value={tour.rating}
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>
                <Typography variant="body3" component="p" marginLeft={1.5}>
                  ({tour.numberOfReviews} reviews)
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h3" marginTop={0}>
                  From C {tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </CustomLink>
    </Grid>
  );
}
