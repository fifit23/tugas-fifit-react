import React from 'react';

class Component extends React.Component {
  state = {
    number: 100
  };
  tambah = () => {
    this.setState({ number: this.state.number + 1 });
  };
  kurang = () => {
    this.setState({ number: this.state.number - 1 });
  };
  pembagian = () => {
    this.setState({ number: this.state.number / 2 });
  };
  perkalian = () => {
    this.setState({ number: this.state.number * 2 });
  };
  render() {
    return (
      <React.Fragment>
        <h2>ini sebuah component class</h2>
        <h2>{this.state.number}</h2>
        <button onClick={this.tambah}>tambah</button>
        <button onClick={this.kurang}>kurang</button>
        <button onClick={this.pembagian}>bagi</button>
        <button onClick={this.perkalian}>kali</button>
      </React.Fragment>
    );
  }
}

export default Component;
