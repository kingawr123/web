import { Component, OnInit, enableProdMode } from '@angular/core';
import * as THREE from 'three';
import { MatSliderChange } from '@angular/material';
import { addPlane } from 'src/threejsHelpers/addPlane';
import { addBox } from 'src/threejsHelpers/addFigure';
import { addLight } from '../../threejsHelpers/addLight';
import { Camera, Geometry, Scene, Vector3, Clock } from 'three';
import { getPointsGeometry } from 'src/threejsHelpers/intersection';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Time } from '@angular/common';

@Component({
  selector: 'app-cube-component',
  templateUrl: './cube-component.component.html',
  styleUrls: ['./cube-component.component.scss']
})
export class CubeComponentComponent implements OnInit {

  value: number;

  box: THREE.Mesh;

  camera: THREE.PerspectiveCamera;

  lines: THREE.LineSegments;
  helper: THREE.EdgesHelper;
  x = 0.5;
  y = 0.5;
  z = 0.5;

  constructor() { }
  ngOnInit(): void {
    const thisComponent = this;
    const scene = new THREE.Scene();

    // create the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera = camera;

    const axis = new THREE.AxesHelper(15);
    scene.add(axis);

    const renderer = new THREE.WebGLRenderer();

    const controls = new OrbitControls(camera, renderer.domElement);

    // set size
    renderer.setSize(window.innerWidth / 1.75, (window.innerHeight) / 1.6);

    // add canvas to dom
    document.body.getElementsByClassName('renderElement')[0].appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x505050, 3));

    const dirLight = addLight();
    scene.add(dirLight);

    // create a box and add it to the scene
    this.box = addBox();
    const box = this.box;
    box.visible = false;
    this.helper = new THREE.EdgesHelper(this.box, 0xFF6D00);
    scene.add(this.helper);
    scene.add(box);

    // const plane = addPlane();
    // scene.add(plane);

    this.camera.position.set(5, 5, 5);
    this.camera.lookAt(scene.position);

    function animate(): void {

      scene.remove(...scene.children.filter(e => e.name === 'linie'));
      debugger;
      const intersectionPoints = getPointsGeometry(box, thisComponent.x, thisComponent.y, thisComponent.z);
      const lines = new THREE.LineSegments(intersectionPoints, new THREE.LineBasicMaterial({
        color: 0xffffff
      }));
      lines.name = 'linie';
      scene.add(lines);

      requestAnimationFrame(animate);
      render();
    }

    function render(): void {
      renderer.render(scene, camera);
    }

    animate();
  }

  updateX(change: MatSliderChange) {
    this.x = change.value;
  }

  updateY(change: MatSliderChange) {
    this.y = change.value;
  }

  updateZ(change: MatSliderChange) {
    this.z = change.value;
  }

  cubeClipping1(){
    this.camera.position.set(6, 1.5, 5.5)

    this.camera.lookAt(new Vector3(0, 0, 0));
    this.x = 0.1;
    this.y = 0;
    this.z = 0;
  }

  cubeClipping2() {
   // const targetPosition = new Vector3(6, 1, 2);

    this.camera.position.set(6, 1, 2)

    this.camera.lookAt(new Vector3(0, 0, 0));
    this.x = 0.00001;
    this.y = 0.5;
    this.z = 0.5;

 //   this.camera.position = new THREE.Vector3().lerpVectors(this.camera.position, targetPosition, 0.01);

  }

  cubeClipping3(){
    this.camera.position.set(6, 1.5, 5.5)

    this.camera.lookAt(new Vector3(0, 0, 0));
    this.x = 0.1;
    this.y = -0.10011;
    this.z = 0;
  }

  cubeClipping4(){
    this.camera.position.set(6, 1.5, 5.5)

    this.camera.lookAt(new Vector3(0, 0, 0));
    this.x = 0.5;
    this.y = 0.5;
    this.z = 0.5;
  }
}
