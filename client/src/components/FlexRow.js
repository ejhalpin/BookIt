import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core";
const styles = theme => ({
  root: {
    borderRadius: "0",
    width: "unset",
    padding: `${theme.spacing.unit}px`,
    margin: "0",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    boxShadow: "none",
    backgroundColor: "#053f5e"
  }
});

const container = props => {
  return (
    <Paper {...props} className={props.classes.root}>
      {props.children}
    </Paper>
  );
};

export default withStyles(styles)(container);
