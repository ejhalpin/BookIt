import React from "react";
import { TextField, MuiThemeProvider, withStyles } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(255,255,255,0.8)",
      dark: "rgba(255,255,255,0.8)"
    },
    text: {
      primary: "rgba(255,255,255,0.6)",
      secondary: "rgba(255,255,255,0.6)"
    }
  }
});

const styles = theme => ({
  root: {
    minWidth: "250px",
    flexGrow: 1,
    margin: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  }
});
const SearchField = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <TextField variant="outlined" className={props.classes.root} {...props} />
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(SearchField);
