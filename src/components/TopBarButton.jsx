import { Button } from "@mui/material";

export default function TopBarButton({ page, navigate, icon }) {
    return (
        <Button 
        onClick={navigate} 
        variant="outlined"        
            sx={{
                color: "white",
                borderColor: "transparent",
                "&:hover": { borderColor: "white" },
            }}
        endIcon={icon}    >
            {page}
        </Button>
    );
}