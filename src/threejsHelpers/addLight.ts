import * as THREE from 'three';

export function addLight(){
  const dirLight = new THREE.DirectionalLight( 0x55505a, 1 );
  dirLight.position.set( 0, 3, 0 );
  dirLight.castShadow = true;
  dirLight.shadow.camera.near = 1;
  dirLight.shadow.camera.far = 10;
  dirLight.shadow.camera.right = 1;
  dirLight.shadow.camera.left = - 1;
  dirLight.shadow.camera.top	= 1;
  dirLight.shadow.camera.bottom = - 1;
  dirLight.shadow.mapSize.width = 1024;
  dirLight.shadow.mapSize.height = 1024;

  return dirLight;
}
