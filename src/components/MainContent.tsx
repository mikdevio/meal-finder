import React from "react";
import MealCard from "./MealCard";
import { Container } from "@mui/material";

const recipies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MainContent: React.FC = () => {
  return (
    <Container
      sx={{
        mt: 0,
        mx: 0,
        display: "flex",
        flexWrap: "wrap",
        minWidth: "100%",
        // border: 1,
        justifyContent: "initial",
      }}
    >
      {recipies.map((r) => (
        <MealCard key={r} id={r} />
      ))}
      ;
    </Container>
  );
};

export default MainContent;
