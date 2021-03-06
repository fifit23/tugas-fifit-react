import React from 'react';
import Card from '../../component/card';
import Data from '../../data/data-dummy';
import Appbar from '../../component/appbar';
import Container from '@material-ui/core/Container';

function Listmakanan(props) {
  const {} = props;
  return (
    <Container maxWidth="xs">
      <React.Fragment>
        <Appbar title="kategori indonesia food" go back />
        {Data.map(item => {
          if (item.jenis == 'indonesia food')
            return (
              <Card
                style={{ paddingTop: '20px', padding: '20px' }}
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
export default Listmakanan;
