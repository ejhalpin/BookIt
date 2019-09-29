import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "7px",
    width: "unset",
    padding: `${theme.spacing.unit}px`,
    margin: `${theme.spacing.unit}px`,
    backgroundColor: "#053f5e",
    color: "#e1e1e1"
  }
});

const container = props => {
  return (
    <Paper {...props} color="primary" className={props.classes.root}>
      {props.children}
    </Paper>
  );
};

export default withStyles(styles)(container);
