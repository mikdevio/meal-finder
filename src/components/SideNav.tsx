import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Card, CardHeader, Grid, Skeleton, Typography } from "@mui/material";
import { Category } from "../types";

interface SideNavProps {
  categories?: Category[];
  loading?: boolean;
};


const SideNav: React.FC<SideNavProps> = ({ categories, loading }) => {

  const [selectedCategory, setSelectedCategory] = React.useState<number>(0);

  const handleCategoryClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number) => {
    console.log("Category clicked:", index);
    setSelectedCategory(index);
  };


  return loading ?
    <SideNavSkeleton numberOfItems={14} />
    : (
      <Card style={{ boxShadow: "none", borderRadius: "0px", margin: "0px", padding: "0px" }}>
        <CardHeader
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              <Typography
                // variant="h6"
                fontSize={"18px"}
                component="div"

                sx={{ textAlign: "left", fontWeight: "bold" }}>
                CATEGORIAS
              </Typography>
            </ListSubheader>
          }
        />
        {/* <Divider /> */}
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {categories && categories.map((category, index) => (
            <ListItemButton key={index} selected={selectedCategory === index}
              onClick={(event) => handleCategoryClick(event, index)}>
              <ListItemText primary={category.strCategory} />
            </ListItemButton>
          ))}

        </List>
      </Card>
    );
};

interface SideNavSkeletonProps {
  numberOfItems?: number;
}

const SideNavSkeleton: React.FC<SideNavSkeletonProps> = ({ numberOfItems }) => {

  const items = Array.from({ length: numberOfItems || 10 });

  return (
    <Grid paddingTop={5} paddingLeft={2} paddingRight={2} sx={{ width: "100%" }}>
      <Skeleton animation="wave" variant="rectangular" width={"100%"} height={25} />
      {items.map((_, index) => (
        <Skeleton key={index} animation="wave" variant="text" width={"100%"} height={30} sx={{ marginTop: 1 }} />
      ))}
    </Grid>)
}

export default SideNav;
