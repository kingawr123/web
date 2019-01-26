import { Vector4, Vector3 } from 'three';

export function compereVectors4(v1: Vector4, v2: Vector4, diff = 0.001){
  return Math.abs(v1.x - v2.x) < diff && Math.abs(v1.y - v2.y) < diff && Math.abs(v1.z - v2.z) < diff && Math.abs(v1.w - v2.w) < diff;
}

export function compereVectors3(v1: Vector3, v2: Vector3, diff = 0.001){
  return Math.abs(v1.x - v2.x) < diff && Math.abs(v1.y - v2.y) < diff && Math.abs(v1.z - v2.z) < diff;
}
