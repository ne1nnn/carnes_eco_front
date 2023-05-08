import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./styles.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const { title, price, image, description, recipe } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 450,
        backgroundColor: "#ffffff",
        boxShadow: "0px 8px 9px rgba(0, 0, 0, 0.16)",
        borderRadius: "30px",
      }}
    >
      {/* AQUI LE DOY ESTILO AL TITULO DEL PRODUCT */}
      <CardHeader
        title={title}
        titleTypographyProps={{
          variant: "h3",
          color: "black",
          style: { textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" },
        }}
      />
      <CardContent>
        <Typography variant="h4" color="text.secondary" sx={{ padding: "5px" }}>
          {"$ " + price}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image={`http://localhost:4000/images/${image}`}
        alt={title}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{recipe}</Typography>
        </CardContent>
      </Collapse>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{ backgroundColor: "black", color: "white" }}
          className="button-card"
        >
          Agregar al carro
        </Button>
      </div>
      <br></br>
    </Card>
  );
}
