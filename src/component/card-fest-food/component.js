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
        props.history.push('/fast-food');
      }}
      style={{ paddingTop: '10px', padding: 20 }}>
      <CardActionArea>
        <CardMedia
          style={{ height: '250px' }}
          image="https://hennablogspot.com/wp-content/uploads/2014/06/Exhibitor-Food.jpg"
        />
        <Typography variant="body1"> Kategori fest food</Typography>
      </CardActionArea>
    </Card>
  );
}
export default withRouter(Kategori);
