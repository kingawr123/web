import * as THREE from 'three';

export function addBox() {

  const material = new THREE.MeshPhongMaterial({
    color: 0xFF9900,
    shininess: 100,
  });

  const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
  box.castShadow = true;

  box.position.set(2, 2.5, 2);

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



