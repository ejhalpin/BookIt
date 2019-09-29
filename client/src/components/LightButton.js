import React from "react";
import { withStyles, MuiThemeProvider, Button } from "@material-ui/core";
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
    },
    action: {
      hoverOpacity: 0.8
    }
  }
});

const styles = theme => ({
  root: {
    "&:hover": {
      color: "#022c43"
    }
  }
});

const LightButton = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <Button color="primary" size="large" variant="outlined" className={props.classes.root} {...props}>
        {props.children}
      </Button>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(LightButton);
