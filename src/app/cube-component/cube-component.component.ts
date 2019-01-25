import { Component, OnInit, enableProdMode } from '@angular/core';
import * as THREE from 'three';
import { MatSliderChange, MatTabChangeEvent } from '@angular/material';
import { addPlane } from 'src/threejsHelpers/addPlane';
import { addBox } from 'src/threejsHelpers/addFigure';
import { addLight } from '../../threejsHelpers/addLight';
import { Camera, Geometry, Scene, Vector3, Clock } from 'three';
import { getPointsGeometry } from 'src/threejsHelpers/intersection';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Time } from '@angular/common';
import { timer } from 'rxjs';
import { posix } from 'path';

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
  x = 0.1;
  y = 0;
  z = 0;
  offset = 0;

  clock: Clock = new Clock();
  targetPosition: Vector3;
  startPosition: Vector3;

  constructor() { }
  ngOnInit(): void {
    const self = this;
    const scene = new THREE.Scene();

    // create the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    self.camera = camera;

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
    self.box = addBox();
    const box = self.box;
    box.visible = false;
    self.helper = new THREE.EdgesHelper(self.box, 0xFF6D00);
    scene.add(self.helper);
    scene.add(box);

    // const plane = addPlane();
    // scene.add(plane);

    self.camera.position.set(5, 5, 5);
    self.camera.lookAt(scene.position);

    function animate(): void {

      scene.remove(...scene.children.filter(e => e.name === 'linie'));
      const intersectionPoints = getPointsGeometry(box, self.x, self.y, self.z, self.offset);
      const lines = new THREE.LineSegments(intersectionPoints, new THREE.LineBasicMaterial({
        color: 0xffffff
      }));
      lines.name = 'linie';
      scene.add(lines);

      if (!self.startPosition) {
        self.startPosition = self.camera.position;
      }

      if (self.targetPosition && !self.targetPosition.equals(self.startPosition)) {
        const elapsedTime = self.clock.getElapsedTime();
        const { x, y, z } = new THREE.Vector3().lerpVectors(self.startPosition, self.targetPosition, Math.min(elapsedTime / 3, 1));
        console.log(self.clock.getElapsedTime());
        self.camera.position.set(x, y, z);

        if (self.camera.position.equals(self.targetPosition)) {
          self.startPosition = self.targetPosition;
          self.clock.stop();
        }
        new THREE.Vector3().equals
        // self.isClick = false;
      }

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

  updateOffset(change: MatSliderChange) {
    this.offset = change.value;
  }

  tabChanged(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.cubeClipping1();
        break;
      case 1:
        this.cubeClipping2();
        break;
      case 2:
        this.cubeClipping3();
        break;
      case 3:
        this.cubeClipping4();
        break;
    }
  }

  cubeClipping1() {
    this.targetPosition = new Vector3(3, 3, 3);
    this.clock.stop();
    this.clock.start();
    // this.camera.lookAt(new Vector3(0, 0, 0));
    this.x = 0.1;
    this.y = 0;
    this.z = 0;
  }

  cubeClipping2() {
    this.targetPosition = new Vector3(6, 1, 2);
    this.clock.stop();
    this.clock.start();
    // this.camera.lookAt(new Vector3(0, 0, 0));
    this.x = 0.00001;
    this.y = 0.5;
    this.z = 0.5;

    // this.camera.position = new THREE.Vector3().lerpVectors(this.camera.position, targetPosition, 0.2);
  }

  cubeClipping3() {
    this.camera.position.set(6, 1.5, 5.5);
    this.clock.stop();
    this.clock.start();
    // this.camera.lookAt(new Vector3(0, 0, 0));
    this.x = 0.1;
    this.y = -0.10011;
    this.z = 0;
  }

  cubeClipping4() {
    this.camera.position.set(6, 1.5, 5.5)
    this.clock.stop();
    this.clock.start();
    // this.camera.lookAt(new Vector3(0, 0, 0));
    this.x = 0.5;
    this.y = 0.5;
    this.z = 0.5;
  }
}
