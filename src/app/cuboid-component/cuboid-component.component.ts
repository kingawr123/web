import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { MatSliderChange } from '@angular/material';
import { addPlane } from 'src/threejsHelpers/addPlane';
import { addBox } from 'src/threejsHelpers/addFigure';
import { addLight } from '../../threejsHelpers/addLight';
import { addCuboid } from '../../threejsHelpers/addFigure';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { getPointsGeometry } from 'src/threejsHelpers/intersection';

@Component({
  selector: 'app-cuboid-component',
  templateUrl: './cuboid-component.component.html',
  styleUrls: ['./cuboid-component.component.scss']
})

export class CuboidComponentComponent implements OnInit  {

  value: number;

  box: THREE.Mesh;

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

    const axis = new THREE.AxesHelper(15);
    scene.add(axis);

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth/1.75 , window.innerHeight/1.6);

    const controls = new OrbitControls(camera, renderer.domElement);

    document.body.getElementsByClassName('renderElement')[0].appendChild(renderer.domElement);

    scene.add( new THREE.AmbientLight( 0x505050, 3 ) );

    const dirLight = addLight();
    scene.add( dirLight );

    this.box = addCuboid();
    const box = this.box;
    box.visible = false;
    this.helper = new THREE.EdgesHelper(box, 0xFF6D00);
    scene.add(this.helper);
    scene.add(this.box);

    // const plane = addPlane();
    // scene.add(plane);


    camera.position.set(5, 5, 5);

    camera.lookAt(scene.position);

    function animate(): void {
      scene.remove(...scene.children.filter(e => e.name === 'linie'));
      debugger;
      const intersectionPoints = getPointsGeometry(box, thisComponent.x, thisComponent.y, thisComponent.z, 0);
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

}
