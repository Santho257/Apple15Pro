import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const init = () => {
    const container = document.querySelector('.product-viewer-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(1, container.clientHeight / container.clientWidth, 1, 500);
    camera.position.set(0, 0, 10);

    // Adjusting camera aspect ratio to match container
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    //Light Setup
    const ambient = new THREE.AmbientLight(0x404040, 13);
    scene.add(ambient);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 18);
    directionalLight.position.set(0, 1, 1); // Set the direction of the light
    scene.add(directionalLight);

    //Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    //Model Loading
    const loader = new GLTFLoader();
    loader.load('./assets/3d/titanium/scene.gltf', gltf => {
        scene.add(gltf.scene);
        //initial_rotation();
        scene.rotation.y = Math.PI;
        animate();
    });

    let isDragging = false;
    let previousMousePosition = {
        x: 0,
        y: 0
    };

    // Function to handle mouse down events
    function onMouseDown(event) {
        if (event.clientX > 460 && event.clientX < 760) {
            isDragging = true;
            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        }

    }

    // Function to handle mouse move events
    function onMouseMove(event) {
        if (!isDragging) return;
        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };

        // Rotate the cube
        scene.rotation.x += deltaMove.y * 0.01;
        scene.rotation.y += deltaMove.x * 0.01;

        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    }

    // Function to handle mouse up events
    function onMouseUp(event) {
        isDragging = false;
    }

    // Add event listeners
    container.addEventListener('mousedown', onMouseDown, false);
    container.addEventListener('mousemove', onMouseMove, false);
    container.addEventListener('mouseup', onMouseUp, false);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
}

init();
