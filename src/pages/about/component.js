import React from 'react';

const siswa = ['fifit', 'rere', 'Evan', 'Eval', 'malicha', 'yuan'];
class Component extends React.Component {
  render() {
    return (
      <React.Fragment>
        {siswa.map(item => {
          return <h1>{item}</h1>;
        })}
      </React.Fragment>
    );
  }
}

export default Component;
