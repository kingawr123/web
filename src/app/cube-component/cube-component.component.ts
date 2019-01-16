import { Component, OnInit, enableProdMode } from '@angular/core';
import * as THREE from 'three';
import { MatSliderChange } from '@angular/material';
import { addPlane } from 'src/threejsHelpers/addPlane';
import { addBox } from 'src/threejsHelpers/addFigure';
import { addLight } from '../../threejsHelpers/addLight';
import { addClippingPlane } from '../../threejsHelpers/addPlane';

@Component({
  selector: 'app-cube-component',
  templateUrl: './cube-component.component.html',
  styleUrls: ['./cube-component.component.scss']
})
export class CubeComponentComponent implements OnInit {

  value: number;

  box: THREE.Mesh;

  constructor() { }
  ngOnInit(): void {
    const scene = new THREE.Scene();

    // create the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const axis = new THREE.AxesHelper(15);
    scene.add(axis);

    const renderer = new THREE.WebGLRenderer();

    // set size
    renderer.setSize(window.innerWidth , window.innerHeight - 68);

    // add canvas to dom
    document.body.getElementsByClassName('renderElement')[0].appendChild(renderer.domElement);

    scene.add( new THREE.AmbientLight( 0x505050, 3 ) );

    const dirLight = addLight();
    scene.add( dirLight );

    // create a box and add it to the scene
    this.box = addBox();
    scene.add(this.box);

    const plane = addPlane();
    scene.add(plane);

    const clippingPlane = addClippingPlane();
    clippingPlane.position.set(0, 0, 0);
    scene.add(clippingPlane);

    clippingPlane.visible = false;

    camera.position.set(2, 2.5, 3.5);

    camera.lookAt(scene.position);

    function animate(): void {
      requestAnimationFrame(animate);
      render();
    }

    function render(): void {
      renderer.render(scene, camera);
    }

    animate();
  }

  updateBoxX(change: MatSliderChange) {
    this.box.position.x = change.value;
  }
}
