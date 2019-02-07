import React, { Component } from 'react';
import { OBJModel } from 'react-3d-viewer'
import model from './3dmodel/ds4obj.obj';
import material from './3dmodel/ds4obj.mtl';
import './styles/Viewer.css';

class Viewer extends Component {
  render() {
    return (
      <div className="Viewer">
        <OBJModel
          src={model}
          mtl={material}
          width={800}
        />
      </div>
    );
  }
}

export default Viewer;
