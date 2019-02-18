import * as THREE from 'three';
import { Vector3, Mesh, PlaneGeometry } from 'three';

export function addPlane(x: number, y:number, z: number) {

  const material = new THREE.MeshBasicMaterial({
    color: 0xBDBDBD,
    opacity: 0.5,
    transparent: true,
    side: THREE.DoubleSide,
  });

  const plane = new Mesh(new PlaneGeometry(5,5), material)
  plane.position.set(x,y,z)
  return plane;
}
