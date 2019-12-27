import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardActions } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Component(props) {
  const [number, setNumber] = useState(0);
  const { nama, harga, jenis, image } = props;
  return (
    <Card style={{ width: 200 }}>
      <CardMedia style={{ height: 100 }} image={image} />
      <Typography variant="h5" component="h5">
        {nama}
      </Typography>
      <Typography variant="h5" component="h5">
        {harga}
      </Typography>
      <Typography variant="h5" component="h5">
        {jenis}
      </Typography>
      <CardActions>
        <Button
          onClick={() => setNumber(number + 1)}
          style={{ backgroundColor: '#ff5722' }}>
          +
        </Button>
        <h2>{number}</h2>
        <Button
          onClick={() => setNumber(number - 1)}
          style={{ backgroundColor: '#ff5722' }}>
          -
        </Button>
      </CardActions>
    </Card>
  );
}

export default Component;
