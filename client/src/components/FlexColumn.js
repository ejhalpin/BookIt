import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core";
const styles = theme => ({
  root: {
    borderRadius: "0",
    width: "unset",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#053f5e",
    boxShadow: "none"
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
