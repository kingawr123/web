import * as THREE from 'three';
import { Mesh } from 'three';

export function addBox() {

  const material = new THREE.MeshPhongMaterial({
    color: 0xFF9900,
    shininess: 100,
  });

  const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
  box.castShadow = true;

  box.position.set(0, 0, 0);

  return box;
}

export function addSphere(){
  const material = new THREE.MeshPhongMaterial({
    color: 0xFF9900,
    shininess: 100,
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
  });

  const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.5, 1.5), material);
  box.castShadow = true;

  box.position.set(2, 2.5, 2);

  return box;
}

export function addCone(){
  const material = new THREE.MeshPhongMaterial({
    color: 0xFF9900,
    shininess: 100,
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
  });

  var geo = new THREE.CylinderGeometry(0, 1, 2, 4, 1, true);

  var pyramid = new THREE.Mesh(geo, material);
  pyramid.position.set(2, 2.5, 2);
  pyramid.castShadow = true;

  pyramid.rotation.y = 70;

  return pyramid
}



