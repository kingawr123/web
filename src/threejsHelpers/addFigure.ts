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

  var geo = new THREE.ConeGeometry(2,4.5,50);

  var cone = new THREE.Mesh(geo, material);
  cone.position.set(2, 2.5, 2);
  cone.castShadow = true;

  cone.rotation.y = 70;

  return cone
}

export function addDeco(){
  const material = new THREE.MeshPhongMaterial({
    color: 0xFF9900,
    shininess: 100,
    wireframe: true,
  });

  var geo =   new THREE.DodecahedronGeometry(4);
  var dodecahedron = new THREE.Mesh(geo, material);

  dodecahedron.castShadow = true;

  return dodecahedron;
}

export function addOctahedron(){
  const material = new THREE.MeshPhongMaterial({
    color: 0xFF9900,
    shininess: 100,
    wireframe: true,
  });

  var geo =   new THREE.OctahedronGeometry(4);
  var octahedron = new THREE.Mesh(geo, material);

  octahedron.castShadow = true;

  return octahedron;
}

export function addPyramid(){
  const material = new THREE.MeshPhongMaterial({
    color: 0xFF9900,
    shininess: 100,
    wireframe: true,
  });

  var geo = new THREE.ConeGeometry(2,4.5,10);
  var pyramid = new THREE.Mesh(geo, material);

  pyramid.castShadow = true;

  return pyramid
}



