import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

function Kategori(props) {
  return (
    <Card
      onClick={() => {
        props.history.push('/list-makanan');
      }}
      style={{ paddingTop: '10px', padding: '20px' }}>
      <CardActionArea>
        <CardMedia
          style={{ height: '250px' }}
          image="https://cdn.idntimes.com/content-images/post/20181212/kuliner-indonessdsdia-87489b810390089e5d15cb5fbdc66865_600x400.jpg"
        />
        <Typography variant="body1"> Kategori indonesia food</Typography>
      </CardActionArea>
    </Card>
  );
}
export default withRouter(Kategori);
