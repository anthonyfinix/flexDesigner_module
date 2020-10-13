import { PerspectiveCamera } from "../../node_modules/three/build/three.module.js";

export default ({
  fov = 75,
  element = document.getElementById('render'),
  near = 0.1,
  far = 1000,
  position = { x: 0, y: 0, z: 100 },
}) => {
  let aspect = element.clientWidth/element.clientHeight
  let camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.x = position.x;
  camera.position.y = position.y;
  camera.position.z = position.z;
  return camera;
};
