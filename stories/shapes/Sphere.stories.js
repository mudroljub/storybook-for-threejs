import * as THREE from "three";
import { camera, canvas, renderer, scene } from "../Scene";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default {
  title: "Example/Shapes",
  argTypes: {},
};

export const Sphere = ({ radius, color }) => {
  camera.position.z = 2.75;

  const directionalLight = new THREE.DirectionalLight(0x9099aa);
  directionalLight.position.set(-10, 10, -10).normalize();
  scene.add(directionalLight);

  const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemisphereLight.position.set(1, 1, 1);
  scene.add(hemisphereLight);

  const material = new THREE.MeshStandardMaterial({
    color,
    metalness: 0.15,
  });

  const geometry = new THREE.SphereGeometry(radius);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  new OrbitControls(camera, renderer.domElement);

  return canvas;
};

Sphere.args = { 
  radius: 1,
  color: '#00ff00',
};
