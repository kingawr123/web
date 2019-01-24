import * as THREE from 'three';
import { Mesh } from 'three';

export function addBox() {

  const material = new THREE.MeshBasicMaterial({
    color: 0xFF9900,
    wireframe: true,
  });

  const box = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), material);
  box.castShadow = true;

  return box;
}

export function addSphere(){
  const material = new THREE.MeshPhongMaterial({
    color: 0xFF9900,
    shininess: 100,
    wireframe: true,
  });

  const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2), material);
  sphere.castShadow = true;

  sphere.position.set(2, 2.5, 2)

  return sphere;
}

export function addCuboid(){
  const material = new THREE.MeshPhongMaterial({
    color: 0xFF9900,
    shininess: 100,
    wireframe: true,
  });

  const box = new THREE.Mesh(new THREE.BoxGeometry(3, 4, 3), material);
  box.castShadow = true;

 // box.position.set(2, 2.5, 2);

  return box;
}

export function addCone(){
  const material = new THREE.MeshPhongMaterial({
    color: 0xFF9900,
    shininess: 100,
    wireframe: true,
  });

  var geo = new THREE.CylinderGeometry(0, 1, 2, 50, 1, true);

  var cone = new THREE.Mesh(geo, material);
  cone.position.set(2, 2.5, 2);
  cone.castShadow = true;

  cone.rotation.y = 70;

  return cone
}

export function addPyramid(){
  const material = new THREE.MeshPhongMaterial({
    color: 0xFF9900,
    shininess: 100,
    wireframe: true,
  });

  var geo = new THREE.CylinderGeometry(0, 3, 5, 4, 1, true);

  var pyramid = new THREE.Mesh(geo, material);
 // pyramid.position.set(2, 2.5, 2);
  pyramid.castShadow = true;

  pyramid.rotation.y = 70;

  return pyramid
}



