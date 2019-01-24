import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { addLight } from 'src/threejsHelpers/addLight';
import { addPlane } from 'src/threejsHelpers/addPlane';
import { addPyramid } from '../../threejsHelpers/addFigure';
import { OrbitControls } from 'three-orbitcontrols-ts';

@Component({
  selector: 'app-pyramid-component',
  templateUrl: './pyramid-component.component.html',
  styleUrls: ['./pyramid-component.component.scss']
})
export class PyramidComponentComponent implements OnInit {

  box: THREE.Mesh;

  lines: THREE.LineSegments;
  helper: THREE.EdgesHelper;

  x = 0.5;
  y = 0.5;
  z = 0.5;

    constructor() { }

    ngOnInit() {

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(5, 5, 5);
      camera.lookAt(scene.position);

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth/1.75 , window.innerHeight/1.6);

      const controls = new OrbitControls(camera, renderer.domElement);

      document.body.getElementsByClassName('renderElement')[0].appendChild(renderer.domElement);

      const axis = new THREE.AxesHelper(15);
      scene.add(axis);

      scene.add( new THREE.AmbientLight( 0x505050, 3 ) );

      const dirLight = addLight();
      scene.add( dirLight );

      this.box = addPyramid();
      const box = this.box;
      box.visible = false;
      this.helper = new THREE.EdgesHelper(box, 0xFF6D00);
      this.helper.rotation.y = 0.75;
      scene.add(this.helper);
      scene.add(box);

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
