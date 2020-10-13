import { Scene,Color } from "../../node_modules/three/build/three.module.js";

export default ({ background = 0xffffff }) => {
  let scene = new Scene();
  scene.background = new Color(parseInt(background));
  return scene;
};
