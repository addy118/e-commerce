import { Button } from "@mui/material";
import "./App.css";
import { Globe } from "lucide-react";

function App() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        sx={{
          px: 4,
          fontSize: 48,
          "&:focus": {
            outline: "none",
          },
        }}
        startIcon={<Globe color="#1976d2" size={48} />}
        variant="outlined"
      >
        Hello world
      </Button>
    </div>
  );
}

export default App;
