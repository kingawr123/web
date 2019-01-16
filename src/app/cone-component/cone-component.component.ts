import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { addLight } from 'src/threejsHelpers/addLight';
import { addPlane } from 'src/threejsHelpers/addPlane';
import { addCone } from '../../threejsHelpers/addFigure';
import { Button, element } from 'protractor';

@Component({
  selector: 'app-cone-component',
  templateUrl: './cone-component.component.html',
  styleUrls: ['./cone-component.component.scss']
})
export class ConeComponentComponent implements OnInit {

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

    const cone = addCone();
    scene.add(cone);

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

