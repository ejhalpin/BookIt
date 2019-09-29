import React from "react";
import { withStyles, MuiThemeProvider, Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#053f5e",
      dark: "#053f5e"
    },
    text: {
      primary: "rgba(5,63,94,0.8)",
      secondary: "rgba(5,63,94,0.8)"
    },
    action: {
      hoverOpacity: 0.8
    }
  }
});

const styles = theme => ({
  root: {
    "&:hover": {
      color: "rgba(255,255,255,0.9)"
    }
  }
});

const CustomButton = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <Button color="primary" size="large" variant="outlined" className={props.classes.root} {...props}>
        {props.children}
      </Button>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(CustomButton);
