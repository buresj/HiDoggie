import * as React from "react";
import { Button } from "@material-ui/core";

function RefreshButton() {
  return (
    <div style={{ padding: "25px" }}>
      <Button
        variant="contained"
        color={"secondary"}
        onClick={() => window.location.reload()}
      >
        Refresh
      </Button>
    </div>
  );
}

export default RefreshButton;
