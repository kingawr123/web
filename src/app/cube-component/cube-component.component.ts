import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { LightShadow } from 'three';

@Component({
  selector: 'app-cube-component',
  templateUrl: './cube-component.component.html',
  styleUrls: ['./cube-component.component.scss']
})
export class CubeComponentComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    const scene = new THREE.Scene();

    // create the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const axis = new THREE.AxesHelper(15);
    scene.add(axis);

    const renderer = new THREE.WebGLRenderer();

    // set size
    renderer.setSize(window.innerWidth , window.innerHeight - 68);

    // add canvas to dom
    document.body.getElementsByClassName('renderElement')[0].appendChild(renderer.domElement);

    scene.add( new THREE.AmbientLight( 0x505050, 3 ) );
   
    var dirLight = new THREE.DirectionalLight( 0x55505a, 1 );
    dirLight.position.set( 0, 3, 0 );
    dirLight.castShadow = true;
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 10;
    dirLight.shadow.camera.right = 1;
    dirLight.shadow.camera.left = - 1;
    dirLight.shadow.camera.top	= 1;
    dirLight.shadow.camera.bottom = - 1;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add( dirLight );
    

    const material = new THREE.MeshPhongMaterial({
      color: 0xFF9900,
      shininess: 100,
    });

    const material2 = new THREE.MeshPhongMaterial({
      color: 0xFFFFFF,
      shininess: 150
    });

    // create a box and add it to the scene
    const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
    box.castShadow = true;
    scene.add(box);

    const plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(9, 9, 1, 1), material2);
    plane.receiveShadow = true;
    plane.rotation.x = -1.57;
    plane.rotation.y = 0;
    plane.rotation.z = 0;

    plane.position.x = -5;
    plane.position.y = -5;
    plane.position.z = -5;

    scene.add(plane);
  
    box.position.x = 2;
    box.position.y = 2.5;
    box.position.z = 2;

    camera.position.x = 5;
    camera.position.y = 5;
    camera.position.z = 5;

    camera.lookAt(scene.position);

    function animate(): void {
      requestAnimationFrame(animate);
      render();
    }

    function render(): void {
      const timer = 0.002 * Date.now();
      renderer.render(scene, camera);
    }

    animate();
  }
}
