import { RenderPass } from "../../node_modules/three/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "../../node_modules/three/examples/jsm/postprocessing/EffectComposer.js";

import createRenderer from "./createRenderer.js";
import createCamera from "./createCamera.js";
import createScene from "./createScene.js";
import createControl from "./createControl.js";

export default () => {
  let scene = createScene({ background: 0xf0f0f0 });
  let camera = createCamera({ element: document.getElementById("render") });
  let renderer = createRenderer({ element: document.getElementById("render") });
  let controls = createControl({camera,element: document.getElementById("render")});
  let composer = new EffectComposer(renderer);
  var renderScene = new RenderPass(scene, camera);


  

  composer.addPass(renderScene);
  let animate = () => {
    requestAnimationFrame(animate);
    composer.render();
    controls.update();
  };
  animate();
};
