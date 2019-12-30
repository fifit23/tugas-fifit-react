import React from 'react';
import Card from '../../component/card';
import Data from '../../data/data-dummy';
import Appbar from '../../component/appbar';
import Container from '@material-ui/core/Container';

function FastFood(props) {
  const {} = props;
  return (
    <Container maxWidth="xs">
      <React.Fragment>
        <Appbar title="kategori fast food" go back />
        {Data.map(item => {
          if (item.jenis == 'fast food')
            return (
              <Card
                nama={item.nama}
                harga={item.harga}
                jenis={item.jenis}
                image={item.image}
              />
            );
        })}
      </React.Fragment>
    </Container>
  );
}
export default FastFood;
