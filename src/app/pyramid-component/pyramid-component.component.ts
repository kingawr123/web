import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { addLight } from 'src/threejsHelpers/addLight';
import { addPlane } from 'src/threejsHelpers/addPlane';
import { addSphere } from 'src/threejsHelpers/addFigure';
import { addPyrmid } from '../../threejsHelpers/addFigure';

@Component({
  selector: 'app-pyramid-component',
  templateUrl: './pyramid-component.component.html',
  styleUrls: ['./pyramid-component.component.scss']
})
export class PyramidComponentComponent implements OnInit {

    constructor() { }

    ngOnInit() {

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(5, 5, 5);
      camera.lookAt(scene.position);

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth , window.innerHeight - 68);

      document.body.getElementsByClassName('renderElement')[0].appendChild(renderer.domElement);

      const axis = new THREE.AxesHelper(15);
      scene.add(axis);

      scene.add( new THREE.AmbientLight( 0x505050, 3 ) );

      const dirLight = addLight();
      scene.add( dirLight );

      const plane = addPlane();
      scene.add(plane);

      const pyramid = addPyrmid();
      scene.add(pyramid);

      function render(): void {
        renderer.render(scene, camera);
      }

      function animate(): void {
        requestAnimationFrame(animate);
        render();
      }

      animate();
    }
}
