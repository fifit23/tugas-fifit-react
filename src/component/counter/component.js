import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function Counter(props) {
  const [number, setNumber] = useState(21);
  const { classes } = props;
  return (
    <React.Fragment>
      <h1>hello World</h1>
      <h2>{number}</h2>
      <Button onClick={() => setNumber(number + 1)}>tambah</Button>
      <Button onClick={() => setNumber(number - 1)}>kurang</Button>
    </React.Fragment>
  );
}

export default Counter;
