import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0e0e0e",
      paper: "#141414",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
    },
    primary: {
      main: "#caa84d", // luxury gold
    },
  },

  typography: {
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",

    h5: {
      fontWeight: 600,
      letterSpacing: "0.03em",
    },

    h6: {
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      fontSize: "0.85rem",
    },

    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.7,
      fontWeight: 400,
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        color: "text.primary",
      },
    },
  },
});

export default theme;
