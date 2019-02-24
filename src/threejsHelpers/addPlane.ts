import * as THREE from 'three';
import { Vector3, Mesh, PlaneGeometry, DoubleSide } from 'three';
import { ColorConsts } from './colorConst';

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

export function displayPlane(scene: THREE.Scene, planeData: {plane: THREE.PlaneHelper, planeCopy: THREE.PlaneHelper},  mathPlane: THREE.Plane, planeEnabled = false,  size = 7,) {
  scene.remove(planeData.plane);
  scene.remove(planeData.planeCopy);
  if(planeEnabled) {
    var plane = new THREE.PlaneHelper( mathPlane, size, ColorConsts.PLANE_COLOR );
    const material = new THREE.MeshBasicMaterial({
      visible: false
    });

    plane.plane.set(plane.plane.normal, plane.plane.constant / plane.plane.normal.length());
    plane.material = material;
    planeData.plane = plane;
    scene.add(plane);

    const mathPlaneClone = mathPlane.clone();
    var planeCopy = new THREE.PlaneHelper( mathPlaneClone, size, ColorConsts.PLANE_COLOR );

    planeCopy.plane.set(planeCopy.plane.normal.negate(), -plane.plane.constant);
    planeCopy.material = material;

    planeData.planeCopy = planeCopy;
    scene.add(planeCopy);
  }

}
