import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardPokemon({ nome }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nome}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography gutterBottom variant="h8" component="div">
                    tipo01
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                    tipo02
                </Typography>
            </CardActions>
        </Card>
    );
}