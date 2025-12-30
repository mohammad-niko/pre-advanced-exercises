import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";

function AlignedButtons() {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <Stack direction={"row"} spacing={2}>
      <Button
        variant="text"
        disabled={isDisabled}
        onClick={() => setIsDisabled(true)}
      >
        Disabled
      </Button>
      <Button variant="contained" startIcon={<AccountCircle />}>
        Click me
      </Button>
      <Button
        component="a"
        href="https://google.com"
        target="_blank"
        variant="outlined"
      >
        google
      </Button>
    </Stack>
  );
}

export default AlignedButtons;
