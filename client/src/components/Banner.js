import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import Container from "../components/Container";
import classNames from "classnames";

const styles = theme => {
  return {
    root: {
      backgroundColor: "transparent",
      boxShadow: "none"
    },
    toolBar: {
      padding: 0
    },
    brand: {
      fontSize: "3.5rem",
      color: "#292929",
      fontWeight: 700,
      marginRight: `${theme.spacing.unit * 2}px`,
      textShadow: `1px 1px 2px #000000, -1px -1px 2px #fff`,
      textAlign: "center",
      flexGrow: 1
    },
    subtext: {
      color: "#292929",
      textShadow: `1px 1px 2px #000000, -1px -1px 2px #fff`,
      margin: `0 ${theme.spacing.unit}px`,
      textAlign: "right",
      width: "50%",
      alignSelf: "center"
    },
    banner: {
      margin: 0,
      backgroundImage: `url("assets/img/book-banner.jpg")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      padding: `${theme.spacing.unit * 2}px`
    }
  };
};

const Banner = props => {
  return (
    <div className={props.classes.banner}>
      <Container className={props.classes.root} {...props}>
        <Typography variant="h2" className={props.classes.brand}>
          (React) Google Books Search
        </Typography>
        <Typography variant="h6" className={classNames(props.classes.subtext)}>
          Search and Save Books
        </Typography>
      </Container>
    </div>
  );
};

export default withStyles(styles)(Banner);
