// get the API reference manual here: https://threejs.org/docs/
import React, { PropTypes } from 'react'

import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MultiMaterial,
  ObjectLoader,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';


var mesh;
var renderer;
var scene;
var camera;


class Test extends React.Component{
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render () {
    if (!scene) {
      init();
      animate();
    }
    return (
      <div>
        <p>{this.props.title} is crazy</p>
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
  )
  }
}

export default Test


// init();
// animate();

function init() {

    scene = new Scene();

    camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    const geometry = new BoxGeometry( 200, 200, 200 );
    const material = new MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    mesh = new Mesh( geometry, material );
    scene.add( mesh );

    renderer = new WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );
}

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );

}
