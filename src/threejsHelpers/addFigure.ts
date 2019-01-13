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


