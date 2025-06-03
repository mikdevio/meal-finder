import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface MealCardProps {
  id: number;
}

const MealCard: React.FC<MealCardProps> = (props: MealCardProps) => {
  const { id } = props;
  return (
    <Card  sx={{ maxWidth: 300, mr: 2, mt: 2 }}>
      <CardMedia
        component="img"
        alt="paella"
        height="180"
        image="https://mui.com/static/images/cards/paella.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {id} Shrimp and Chorizo Paella
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MealCard;
