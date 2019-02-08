import React, { Component } from 'react';
import { OBJModel } from 'react-3d-viewer'
import model from './3dmodel/ds4obj.obj';
import material from './3dmodel/ds4obj.mtl';
import './styles/Viewer.css';

class Viewer extends Component {
  constructor(props) {
    super(props);

    // just a state demo
    // wouldn't ever set state values as imports
    this.state = {
      model: model,
      material: material
    }
  }

  componentDidMount() {
    console.log("The Dualshock 4 has been successfully loaded!")
  }

  render() {

    return (
      <div className="Viewer">
        <OBJModel
          src={this.state.model}
          mtl={this.state.material}
          width={800}
        />
      </div>
    );
  }
}

export default Viewer;
