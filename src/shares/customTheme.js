import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        // Name of the component
        MuiTableCell: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontSize: '18px',
            //   backgroundColor: '#eee7f0',
            //   padding: 0
            },
          },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                  paddingLeft: 0,
                  paddingRight: 0,
                },
              },
        },
      },
});