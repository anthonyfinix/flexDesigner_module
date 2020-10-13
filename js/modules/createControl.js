import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";

export default ({camera, element}) => {
  var controls = new OrbitControls(camera, element);
  controls.update();
  return controls;
};
