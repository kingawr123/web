import { Component, OnInit, enableProdMode } from '@angular/core';
import * as THREE from 'three';
import { MatSliderChange, MatTabChangeEvent } from '@angular/material';
import { addPlane } from 'src/threejsHelpers/addPlane';
import { addBox } from 'src/threejsHelpers/addFigure';
import { addLight } from '../../threejsHelpers/addLight';
import { Camera, Geometry, Scene, Vector3, Clock, Vector4 } from 'three';
import { getPointsGeometry } from 'src/threejsHelpers/intersection';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { compereVectors4 } from 'src/threejsHelpers/vectorsHelper';
import { addCuboid, addCone } from '../../threejsHelpers/addFigure';

@Component({
  selector: 'app-cone-component',
  templateUrl: './cone-component.component.html',
  styleUrls: ['./cone-component.component.scss']
})
export class ConeComponentComponent implements OnInit {

  value: number;

  box: THREE.Mesh;

  camera: THREE.PerspectiveCamera;

  lines: THREE.LineSegments;
  helper: THREE.EdgesHelper;

  clock: Clock = new Clock();
  targetPosition: Vector3;
  startPosition: Vector3;
  startPlaneVector: Vector4 = new Vector4(0.1, 0, 0, 0);
  planeVector: Vector4 = new Vector4(0.1, 0, 0, 0);
  targetPlaneVector: Vector4 = new Vector4(0.1, 0, 0, 0);
  cameraLookAtTarget: Vector3 = new Vector3(0, 0, 0);

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

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.getElementsByClassName('renderElement')[0].appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x505050, 3));

    const dirLight = addLight();
    scene.add(dirLight);

    // create a box and add it to the scene
    self.box = addCone();
    const box = self.box;
    box.visible = false;
    self.helper = new THREE.EdgesHelper(self.box, 0xFF6D00);
    scene.add(self.helper);
    scene.add(box);

    self.camera.position.set(5, 5, 5);
    self.camera.lookAt(scene.position);


    function animate(): void {
      self.camera.lookAt(self.cameraLookAtTarget);

      if (!self.targetPlaneVector.equals(self.startPlaneVector)) {
        const elapsedTime = self.clock.getElapsedTime();
        self.planeVector = new THREE.Vector4().lerpVectors(self.startPlaneVector, self.targetPlaneVector, Math.min(elapsedTime / 2.5, 1));
        if(compereVectors4(self.targetPlaneVector, self.planeVector)) {
          self.startPlaneVector = self.targetPlaneVector;
        }
      }

      scene.remove(...scene.children.filter(e => e.name === 'linie'));
      const intersectionPoints = getPointsGeometry(box, self.planeVector.x, self.planeVector.y, self.planeVector.z, self.planeVector.w);
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
        const {x,y,z} = new THREE.Vector3().lerpVectors(self.startPosition, self.targetPosition, Math.min(elapsedTime / 2.5, 1));
        self.camera.position.set(x, y, z);
        if(self.camera.position.equals(self.targetPosition)) {
          self.startPosition = self.targetPosition;
        }
      }

      requestAnimationFrame(animate);
      render();
    }

    function render(): void {
      renderer.render(scene, camera);
    }

    animate();
  }

  tabChanged(event: MatTabChangeEvent) {
    this.startPosition = this.camera.position;
    this.startPlaneVector = this.planeVector.clone();
    this.clock.stop();
    this.clock.start();
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
    this.targetPosition = new Vector3(5, 5, 5);
    this.targetPlaneVector.set(0.1, 0, 0, 0);
  }

  cubeClipping2() {
    this.targetPosition = new Vector3(6, 1, 2);
    this.targetPlaneVector.set(0.0001, 0.5, 0.68, 0);
  }

  cubeClipping3() {
    this.targetPosition = new Vector3(4, 1, 4);
    this.targetPlaneVector.set(0.1, -0.1001, 0.1, -0.35);
  }

  cubeClipping4() {
    this.targetPosition = new Vector3(5, 5, 5);
    this.targetPlaneVector.set(0.5, 0.5, 0.5, 0);
  }
}
