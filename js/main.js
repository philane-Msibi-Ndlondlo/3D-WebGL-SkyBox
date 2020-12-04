const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);
camera.position.set(-900, -200, -900);
const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth,  window.innerHeight);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,  window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})


// Add the canavs to be rendered on
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls( camera, renderer.domElement );

//Create the Cube
const boxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);

//My skybox images

const cubeMaterials = [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/humble_ft.jpg'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/humble_bk.jpg'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/humble_up.jpg'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/humble_dn.jpg'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/humble_rt.jpg'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/humble_lf.jpg'), side: THREE.DoubleSide })
];

// Material on the box
//const material = new THREE.MeshFaceMaterial(cubeMaterials);

const cube = new THREE.Mesh(boxGeometry, cubeMaterials);
scene.add(cube);

//Change Camera position
//camera.position.z = 3;

//Handles updates to the scene
var update = function() {

    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

}

// Anything you want to be drawn on the scene/ Draw scene
var render = function() {

    renderer.render(scene, camera);

}

// This is a game loop for refreshing the frame/ Run game loop (update, render, repeat)
var loop = function() {
    requestAnimationFrame(loop);
    update();
    render();
}

loop();