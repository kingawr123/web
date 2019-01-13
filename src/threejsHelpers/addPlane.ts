import * as THREE from 'three';

export function addPlane() {

  const material2 = new THREE.MeshPhongMaterial({
    color: 0xFFFFFF,
    shininess: 150
  });

  const plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(25, 25), material2);
  plane.receiveShadow = true;
  plane.rotation.x = -1.57;
  plane.rotation.y = 0;
  plane.rotation.z = 0;

  plane.position.x = -5;
  plane.position.y = -5;
  plane.position.z = -5;

  return plane;
}
