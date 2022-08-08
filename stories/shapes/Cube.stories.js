import * as THREE from "three";
import { camera, canvas, scene } from "../Scene";

export default {
  title: "Example/Shapes",
  argTypes: {},
};

export const Cube = ({ size, color, metalness }) => {
  camera.position.z = 2.75;

  const directionalLight = new THREE.DirectionalLight(0x9099aa);
  directionalLight.position.set(-10, 10, -10).normalize();
  scene.add(directionalLight);

  const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemisphereLight.position.set(1, 1, 1);
  scene.add(hemisphereLight);

  const material = new THREE.MeshStandardMaterial({
    color,
    metalness,
  });

  const geometry = new THREE.BoxGeometry(size, size, size);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  return canvas;
};

Cube.args = { 
  size: 1,
  color: '#00ff00',
  metalness: 0.15,
};
