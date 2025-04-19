import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';

export default function MultiActionAreaCard() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh', 
      }}
    >
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height="200"
            image="src/assets/images/ab.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Crop
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Crops are plants cultivated for food, fiber, or other agricultural purposes.
              They are grown in specific seasons and conditions to optimize yield.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
