import Experience from "./Experience";

const experience = new Experience(document.querySelector("canvas.webgl"));

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import GUI from "lil-gui";

// // Debug
// const gui = new GUI();

// // Canvas
// const canvas = document.querySelector("canvas.webgl");

// // Scene
// const scene = new THREE.Scene();

// // size canvas
// const sizes = {
//   width: window.innerWidth,
//   height: innerHeight,
// };

// // Base camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   100
// );
// camera.position.z = 3;
// scene.add(camera);

// // Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

// // Sphere
// const sphereGeometry = new THREE.BoxGeometry(1, 1, 1);

// const mesh = new THREE.Mesh(
//   sphereGeometry,
//   new THREE.MeshBasicMaterial({ color: "yellow" })
// );
// scene.add(mesh);

// window.addEventListener("resize", () => {
//   // Update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   // Update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // Update renderer
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// /**
//  * Animate
//  */
// const clock = new THREE.Clock();

// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();
//   // Update controls
//   controls.update();

//   // Render
//   renderer.render(scene, camera);

//   // Call tick again on the next frame
//   window.requestAnimationFrame(tick);
// };

// tick();
