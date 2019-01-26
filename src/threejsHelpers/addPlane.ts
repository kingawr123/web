import * as THREE from 'three';

export function addPlane() {

  const material = new THREE.MeshBasicMaterial({
    color: 0xBDBDBD,
    opacity: 0.5,
    transparent: true,
    side: THREE.DoubleSide,
  });

  const plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(10, 10), material);
  plane.receiveShadow = true;
  plane.rotation.x = -1.57;
  plane.rotation.y = 0;
  plane.rotation.z = 0;
  plane.position.set(0, 0, 0);

  return plane;
}
