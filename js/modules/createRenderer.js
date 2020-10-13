import {
  WebGLRenderer,
  ReinhardToneMapping,
  PCFSoftShadowMap,
} from "../../node_modules/three/build/three.module.js";

export default ({
  antialias = true,
  shadowMap = false,
  element = document.getElementById("render"),
}) => {
  var renderer = new WebGLRenderer();
  renderer.setSize(element.clientWidth, element.clientHeight);
  renderer.antialias = antialias;
  renderer.toneMapping = ReinhardToneMapping;
  renderer.shadowMap.enabled = shadowMap;
  renderer.shadowMap.type = PCFSoftShadowMap;
  element.appendChild(renderer.domElement);
  return renderer;
};
