import React from 'react';
import Appbar from '../../component/appbar';
import Container from '@material-ui/core/Container';
import CardKategori from '../../component/card-kategori';
import CardFestfood from '../../component/card-fest-food';

function Home() {
  return (
    <Container maxWidth="xs">
      <React.Fragment>
        <Appbar title="selamat datang" />
        <CardKategori />
        <CardFestfood />
      </React.Fragment>
    </Container>
  );
}
export default Home;
