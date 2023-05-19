import * as THREE from 'three'

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(3,64,64);
const material = new THREE.MeshStandardMaterial({
    color: "#ffffff"
});

const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

//lights
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(0,10,10);
scene.add(light)

//camera
const camera = new THREE.PerspectiveCamera(45, 800/600);
camera.position.z = 20;
scene.add(camera);

//grabs the canvas element and renderer
const canvas = document.querySelector('.webgl');
console.log(canvas);    
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(800,600);
renderer.render(scene,camera);




