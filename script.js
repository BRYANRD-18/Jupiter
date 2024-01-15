import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('scene-container').appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const textureLoader = new THREE.TextureLoader();
  const jupiterTexture = textureLoader.load('2k_jupiter.jpg');
  const material = new THREE.MeshBasicMaterial({ map: jupiterTexture });

  const jupiter = new THREE.Mesh(geometry, material);
  scene.add(jupiter);

  camera.position.z = 15;

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', onWindowResize);

  function animate() {
    requestAnimationFrame(animate);

    jupiter.rotation.y += 0.005;

    renderer.render(scene, camera);
  }

  animate();
}

init();
