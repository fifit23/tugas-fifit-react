import React from 'react';

class Component extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>nama ={this.props.nama}</h1>
        <h1>Umur ={this.props.Umur}</h1>
        <h1>tanggal ={this.props.tanggal}</h1>
      </React.Fragment>
    );
  }
}

export default Component;
