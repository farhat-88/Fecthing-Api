import React, { Component } from 'react';

export class Spinner extends Component {
  render() {
      return (
            <div className="restart-loader flex-column text-center">
                  <div className="row justify-content-center">
                        <div className="spinner-border" role="status">
                             
                        </div>
                  </div>
                  <div className="row">
                        <strong>Please wait...</strong>
                  </div>
            </div>
      );
  }
}

export default Spinner;
