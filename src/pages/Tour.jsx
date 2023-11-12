import { BottomNavigation, Box, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import cities from "../data.json";
import QuiltedImageList from "../components/ImageCollage/ImageCollage";
import BasicAccordion from "../components/Accordion/Accordion";
import BasicModal from "../components/Modal/Modal";

export default function Tour() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const name = params.get("name");
  const thisCity = cities
    .flatMap((location) => location.tours)
    .find((tour) => tour.name === name);
  const [value, setValue] = React.useState(0)
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        {name}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src={thisCity.image} width={600} height={325} />
        <QuiltedImageList />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur
          nemo consequuntur, adipisci, ipsam aperiam molestias consequatur quos
          quasi cumque expedita vero animi earum est hic facilis! Obcaecati
          voluptas velit laboriosam, veniam optio molestiae hic ducimus
          assumenda ex deleniti, tempore molestias placeat dicta praesentium
          quod, quidem aspernatur illum cupiditate! Accusamus.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <BasicAccordion />
        <Paper sx={{position: "fixed", bottom: 0, left: 0, right: 0}} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          >
            <BasicModal />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}
