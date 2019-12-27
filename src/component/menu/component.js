import React from 'react';

class Component extends React.Component {
  state = {
    menu: [
      {
        makanan: 'bakso',
        harga: 20000
      },
      {
        makanan: 'nasi goreng',
        harga: 10000
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <h1>fifit mau makan</h1>
        <h1>makanan: {this.state.menu[0].makanan}</h1>
        <h1>Harga: {this.state.menu[0].harga}</h1>
      </React.Fragment>
    );
  }
}

export default Component;
