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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./product.css";

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

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="product">
      <CardHeader
        title={<span className="product-title">Lomo liso</span>}
        action={<Typography className="product-price">$9.900</Typography>}
      />
      <CardMedia
        className="product-image"
        component="img"
        height="194"
        image={process.env.PUBLIC_URL + "/images/lomo-liso.jpg"}
        alt="Lomo liso"
      />
      <CardContent>
        <Typography
          className="product-description"
          variant="body2"
          color="text.secondary"
        >
          Aqui puede ir una descripcion
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          className="product-expand-icon"
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="product-expand-content">
          <Typography className="product-expand-text" paragraph>
            Preparaciones
          </Typography>
          <Typography className="product-expand-text" paragraph>
            Lista de posibles Preparaciones
          </Typography>
          <ul className="product-expand-recipe">
            <li>Preparacion 1</li>
            <li>Preparacion 2</li>
            <li>Preparacion 3</li>
            <li>Preparacion 4</li>
          </ul>
          <Typography className="product-expand-text" paragraph>
            Receta 1
          </Typography>
          <Typography className="product-expand-text" paragraph>
            Receta 2
          </Typography>
          <Typography className="product-expand-text">Receta 3</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
