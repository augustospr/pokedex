import { Button } from "@mui/material";

export default function Paginacao({ melancia }) {
    
    return (
        <div className="paginacao">
            <Button onClick={melancia} variant="contained" color="success" sx={{ width: 250 }}>
                Ver mais +
            </Button>
        </div>
    )
}