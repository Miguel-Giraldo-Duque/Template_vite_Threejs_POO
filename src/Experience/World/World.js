import Experience from "../../Experience";
import * as THREE from "three";
export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene.scene;
    console.log(this.scene);
    this.setInstance();
  }

  setInstance() {
    this.cubeGeomtry = new THREE.BoxGeometry(5, 5, 5);
    // this.materialCube = new THREE.MeshStandardMaterial({
    //   metalness: 0.8,
    //   roughness: 0.5,
    // });
    this.materialCube = new THREE.MeshBasicMaterial({
      color: "yellow",
    });
    this.meshCube = new THREE.Mesh(this.cubeGeomtry, this.materialCube);
    this.light = new THREE.DirectionalLight("white", 0.5);
    this.helper = new THREE.DirectionalLightHelper(this.light, 0.4);
    this.light.position.set(2, 2, 0);
    console.log(this.scene);
    this.meshCube.castShadow = true;
    this.scene.add(this.meshCube, this.light, this.helper);
  }
}
