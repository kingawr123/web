import * as THREE from 'three';

export function addPlane() {

  const material = new THREE.MeshPhongMaterial({
    color: 0xBDBDBD,
    shininess: 150
  });

  const plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(25, 25), material);
  plane.receiveShadow = true;
  plane.rotation.x = -1.57;
  plane.rotation.y = 0;
  plane.rotation.z = 0;

  plane.position.set(-5, -5, -5);

  return plane;
}
