import * as THREE from 'three';
import { Geometry, Vector3 } from 'three';

export function getPointsOfIntersection(line: THREE.Line3, plane: THREE.Plane) {

  const pointsOfIntersection: THREE.Vector3[] = [];
  const pointOfIntersection = plane.intersectLine(line, new Vector3());
  if (pointOfIntersection) {
    pointsOfIntersection.push(pointOfIntersection.clone());
  };
  return pointsOfIntersection;
}


export function getPointsGeometry(object: THREE.Mesh, x: number, y: number, z: number, offset: number) {
  const mathPlane = new THREE.Plane(new Vector3(x, y, z), offset);


  const pointsGeometry = new THREE.Geometry();
  (object.geometry as Geometry).faces.forEach(function(face) {

    let a = new THREE.Vector3(),
    b = new THREE.Vector3(),
    c = new THREE.Vector3();


    object.localToWorld(a.copy((object.geometry as Geometry).vertices[face.a]));
    object.localToWorld(b.copy((object.geometry as Geometry).vertices[face.b]));
    object.localToWorld(c.copy((object.geometry as Geometry).vertices[face.c]));
    const lineAB = new THREE.Line3(a, b);
    const lineBC = new THREE.Line3(b, c);
    const lineCA = new THREE.Line3(c, a);
    pointsGeometry.vertices.push(...getPointsOfIntersection(lineAB, mathPlane));
    pointsGeometry.vertices.push(...getPointsOfIntersection(lineBC, mathPlane));
    pointsGeometry.vertices.push(...getPointsOfIntersection(lineCA, mathPlane));
  });

  return {mathPlane: mathPlane, intersectionPoints: pointsGeometry};
}
