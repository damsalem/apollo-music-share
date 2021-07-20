import { createMuiTheme } from "@material-ui/core";
import { blueGrey, deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blueGrey,
    secondary: deepOrange,
  },
});

export default theme;
