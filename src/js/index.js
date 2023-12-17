import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js';
import sun  from '../img/sun.jpg';
import saturnring from '../img/saturnring.jpg';
import uranusring from '../img/uranusring.jpg';
import admin from '../img/admin.jpg';
import starr from '../img/starr.jpg';
import mercury from '../img/mercury.jpg';
import venus from '../img/venus.jpg';
import earth from '../img/earth.jpg';
import mars from '../img/mars.jpg';
import jupiter from '../img/jupiter.jpg';
import saturn from '../img/saturn.jpg';
import uranus from '../img/uranus.jpg';
import neptune from '../img/neptune.jpg';
import pluto from '../img/pluto.jpg';

const hdrtextureurl = new URL('../img/satara_night_no_lamps_4k.hdr', import.meta.url);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const orbit= new OrbitControls(camera,renderer.domElement);

  camera.position.set(0,0,7);
  orbit.update();

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5;
const loader = new RGBELoader();
loader.load(hdrtextureurl,function(texture){
  texture.mapping=THREE.EquirectangularReflectionMapping;
  scene.background=texture;
  scene.environment=texture;
});

  const ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);

const textureLoader = new THREE.TextureLoader();


const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(sun),
});

const sunMesh = new THREE.Mesh(sunGeo, sunMat);
scene.add(sunMesh);


const mercuryGeo = new THREE.SphereGeometry(3.2, 30, 30);
const mercuryMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(mercury),
});

const mercuryMesh = new THREE.Mesh(mercuryGeo, mercuryMat);
const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercuryMesh);
scene.add(mercuryObj);
mercuryMesh.position.x=28;

const venusGeo = new THREE.SphereGeometry(5.8, 30, 30);
const venusMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(venus),
});

const venusMesh = new THREE.Mesh(venusGeo, venusMat);
const venusObj = new THREE.Object3D();
venusObj.add(venusMesh);
scene.add(venusObj);
venusMesh.position.x=44;

const earthGeo = new THREE.SphereGeometry(6, 30, 30);
const earthMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(earth),
});

const earthMesh = new THREE.Mesh(earthGeo, earthMat);
const earthObj = new THREE.Object3D();
earthObj.add(earthMesh);
scene.add(earthObj);
earthMesh.position.x=62;

const marsGeo = new THREE.SphereGeometry(4, 30, 30);
const marsMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(mars),
});

const marsMesh = new THREE.Mesh(marsGeo, marsMat);
const marsObj = new THREE.Object3D();
marsObj.add(marsMesh);
scene.add(marsObj);
marsMesh.position.x=78;

const jupiterGeo = new THREE.SphereGeometry(12, 30, 30);
const jupiterMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(jupiter),
});

const jupiterMesh = new THREE.Mesh(jupiterGeo, jupiterMat);
const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiterMesh);
scene.add(jupiterObj);
jupiterMesh.position.x=100;

const plutoGeo = new THREE.SphereGeometry(2.8, 30, 30);
const plutoMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(pluto),
});

const plutoMesh = new THREE.Mesh(plutoGeo, plutoMat);
const plutoObj = new THREE.Object3D();
plutoObj.add(plutoMesh);
scene.add(plutoObj);
plutoMesh.position.x=216;

const neptuneGeo = new THREE.SphereGeometry(2.8, 30, 30);
const neptuneMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(neptune),
});

const neptuneMesh = new THREE.Mesh(neptuneGeo, neptuneMat);
const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptuneMesh);
scene.add(neptuneObj);
neptuneMesh.position.x=200;


const saturnGeo = new THREE.SphereGeometry(10, 30, 30);
const saturnMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(saturn),
});

const saturnMesh = new THREE.Mesh(saturnGeo, saturnMat);
const saturnObj = new THREE.Object3D();
saturnObj.add(saturnMesh);
scene.add(saturnObj);
saturnMesh.position.x=138;

const saturnRingGeo = new THREE.SphereGeometry(10, 20, 32);
const saturnRingMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(saturnring),
  side: THREE.DoubleSide
});

const saturnringMesh = new THREE.Mesh(saturnRingGeo, saturnRingMat);
saturnObj.add(saturnringMesh);
saturnringMesh.position.x=138;
saturnringMesh.rotation.x=0.5*Math.PI;

const uranusGeo = new THREE.SphereGeometry(7, 30, 30);
const uranusMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(uranus),
});

const uranusMesh = new THREE.Mesh(uranusGeo, uranusMat);
const uranusObj = new THREE.Object3D();
uranusObj.add(uranusMesh);
scene.add(uranusObj);
uranusMesh.position.x=176;

const uranusRingGeo = new THREE.SphereGeometry(7, 12, 32);
const uranusRingMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(uranusring),
  side: THREE.DoubleSide
});

const uranusringMesh = new THREE.Mesh(uranusRingGeo, uranusRingMat);
uranusObj.add(uranusringMesh);
uranusringMesh.position.x=138;
uranusringMesh.rotation.x=-0.5*Math.PI;

const pointLIght = new THREE.PointLight(0x000000,2,300);
scene.add(pointLIght);


function animate() {  
  sunMesh.rotateY(0.004);
  mercuryMesh.rotateY(0.004);
  saturnMesh.rotateY(0.038);
  venusMesh.rotateY(0.002);
  uranusMesh.rotateY(0.03);
  jupiterMesh.rotateY(0.04);
  plutoMesh.rotateY(0.008);
  neptuneMesh.rotateY(0.032);
  earthMesh.rotateY(0.038);
  marsMesh.rotateY(0.018);
  
  mercuryObj.rotateY(0.04); 
  venusObj.rotateY(0.015);
  earthObj.rotateY(0.01); 
  marsObj.rotateY(0.008);
  jupiterObj.rotateY(0.002); 
  saturnObj.rotateY(0.0009);
  uranusObj.rotateY(0.0004); 
  neptuneObj.rotateY(0.0001);
  plutoObj.rotateY(0.0007);
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);


  window.addEventListener('resize', function(){
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
  });
