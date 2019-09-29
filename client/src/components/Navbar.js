import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = theme => {
  return {
    root: {
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
      backgroundColor: "#053f5e"
    },
    toolBar: {
      padding: 0
    },
    brand: {
      fontSize: "3.5rem",
      color: "rgba(255,255,255,0.9)",
      marginRight: `${theme.spacing.unit * 2}px`,
      textShadow: `2px 2px 2px #000000`,
      flexGrow: 1
    },
    link: {
      textDecoration: "none",
      color: "rgba(255,255,255,0.9)",
      margin: `0 ${theme.spacing.unit}px`,
      textShadow: `1px 1px 1px #000000`,
      "&:hover": {
        opacity: 0.7
      }
    }
  };
};
const Navbar = props => {
  const { root, toolBar, brand, link, banner } = props.classes;
  return (
    <div className={banner}>
      <AppBar position="static" className={root}>
        <Toolbar className={toolBar}>
          <Typography className={brand}>BookIt</Typography>
          <Typography variant="h6">
            <Link to="/" className={link}>
              Search
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/saved" className={link}>
              Saved
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
