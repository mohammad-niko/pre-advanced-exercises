import { Box } from "@mui/material";
import { theme } from "../../theme/theme";

function CustomTheme() {
  return (
    <Box sx={{ mt: 10 }}>
      <Box
        sx={{
          p: 10,
          bgcolor: (theme) => `${theme.palette.primary.main}`,
        }}
      >
        primary
      </Box>
      <Box
        sx={{
          p: 10,
          bgcolor: (theme) => `${theme.palette.secondary.main}`,
        }}
      >
        secondary
      </Box>
      <Box
        sx={{
          p: 10,
          bgcolor: (theme) => `${theme.palette.success.main}`,
        }}
      >
        success
      </Box>
    </Box>
  );
}

export default CustomTheme;
