import { Component, OnInit, enableProdMode } from '@angular/core';
import * as THREE from 'three';
import { MatSliderChange, MatTabChangeEvent } from '@angular/material';
import { addPlane, displayPlane } from 'src/threejsHelpers/addPlane';
import { addBox, addPyramid } from 'src/threejsHelpers/addFigure';
import { addLight } from '../../threejsHelpers/addLight';
import { Camera, Geometry, Scene, Vector3, Clock, Vector4, Side, DoubleSide } from 'three';
import { getPointsGeometry } from 'src/threejsHelpers/intersection';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { compereVectors4 } from 'src/threejsHelpers/vectorsHelper';
import { ColorConsts } from '../../threejsHelpers/colorConst';

@Component({
  selector: 'app-pyramid-component',
  templateUrl: './pyramid-component.component.html',
  styleUrls: ['./pyramid-component.component.scss']
})
export class PyramidComponentComponent implements OnInit {

  value: number;

  box: THREE.Mesh;

  camera: THREE.PerspectiveCamera;

  lines: THREE.LineSegments;
  helper: THREE.EdgesHelper;

  plane: THREE.PlaneHelper;
  planeCopy: THREE.PlaneHelper;
  planeEnabled: boolean;

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

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    self.camera = camera;

    const renderer = new THREE.WebGLRenderer();

    const controls = new OrbitControls(camera, renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.getElementsByClassName('renderElement')[0].appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x505050, 3));
    scene.background = new THREE.Color( ColorConsts.BACKGROUND_COLOR );

    const dirLight = addLight();
    scene.add(dirLight);

    self.box = addPyramid();
    const box = self.box;
    box.visible = false;
    self.helper = new THREE.EdgesHelper(self.box, ColorConsts.EDGES_COLOR);
    scene.add(self.helper);
    scene.add(box);

    self.camera.position.set(4, 4, 4);
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
      const {intersectionPoints, mathPlane} = getPointsGeometry(box, self.planeVector.x, self.planeVector.y, self.planeVector.z, self.planeVector.w);
      const lines = new THREE.LineSegments(intersectionPoints, new THREE.LineBasicMaterial({
        color: ColorConsts.LINES_COLOR
      }));
      lines.name = 'linie';
      scene.add(lines);

      displayPlane(scene, self, mathPlane);

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
    this.targetPosition = new Vector3(3, 3, 0);
    this.targetPlaneVector.set(0.1, 0, 0, 0);
  }

  reset1() {
    this.startPlaneVector = this.planeVector.clone();
    this.clock.stop();
    this.clock.start();
    this.targetPlaneVector.set(0.1, 0, 0, 0);
  }

  cubeClipping2() {
    this.targetPosition = new Vector3(4, 2, 0.5);
    this.targetPlaneVector.set(0, 0.1, 0, 0);
  }

  reset2() {
    this.startPlaneVector = this.planeVector.clone();
    this.clock.stop();
    this.clock.start();
    this.targetPlaneVector.set(0, 0.1, 0, 0);
  }

  cubeClipping3() {
    this.targetPosition = new Vector3(3, 3, 3);
    this.targetPlaneVector.set(0, 0.1, 0.13, 0);
  }

  reset3() {
    this.startPlaneVector = this.planeVector.clone();
    this.clock.stop();
    this.clock.start();
    this.targetPlaneVector.set(0, 0.1, 0.13, 0);
  }

  cubeClipping4() {
    this.targetPosition = new Vector3(3, 3, 3);
    this.targetPlaneVector.set(0, 0.1, 0.1, 0);
  }

  reset4() {
    this.startPlaneVector = this.planeVector.clone();
    this.clock.stop();
    this.clock.start();
    this.targetPlaneVector.set(0, 0.1, 0.1, 0);
  }
}
