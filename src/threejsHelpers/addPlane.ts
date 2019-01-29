import * as THREE from 'three';
import { Vector3 } from 'three';

export function addPlane(x: number, y: number, z: number, offset:number) {

  const material = new THREE.MeshBasicMaterial({
    color: 0xBDBDBD,
    opacity: 0.5,
    transparent: true,
    side: THREE.DoubleSide,
  });

  const plane = new THREE.Mesh( new THREE.PlaneGeometry( 5, 5 ), material);
  plane.rotation.set(x,y,z);
  plane.position.x = offset;
  return plane;
}
