/**
 * Three.js "tutorials by example"
 * Author: Lee Stemkoski
 * Date: July 2013 (three.js v59dev)
 */

import {
  Vector3,
  Scene,
  Clock,
  PerspectiveCamera,
  WebGLRenderer,
  PointLight,
  MeshBasicMaterial,
  MeshFaceMaterial,
  DoubleSide,
  PlaneGeometry,
  Mesh,
  CubeGeometry,
  FogExp2
} from 'three'

// MAIN

// standard global variables
let container
let scene
let camera
let renderer
let stats
let clock = new Clock()
// custom global variables

init()
animate()

// FUNCTIONS
function init () {
  // SCENE
  scene = new Scene()
  // CAMERA
  let SCREEN_WIDTH = window.innerWidth
  let SCREEN_HEIGHT = window.innerHeight
  let VIEW_ANGLE = 45
  let ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT
  let NEAR = 0.1
  let FAR = 20000
  camera = new PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR)
  scene.add(camera)
  camera.position.set(0, 150, 400)
  camera.lookAt(scene.position)
  // RENDERER
  renderer = new WebGLRenderer({ antialias: true })
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT)
  container = document.body
  container.appendChild(renderer.domElement)
  // EVENTS
  // THREEx.WindowResize(renderer, camera)
  // THREEx.FullScreen.bindKey({ charCode: 'm'.charCodeAt(0) })

  // CONTROLS
  // MUST REMOVE THIS LINE!!!
  // controls = ...

  // LIGHT
  var light = new PointLight(0xffffff)
  light.position.set(0, 250, 0)
  scene.add(light)
  // FLOOR
  // var floorTexture = new TextureLoader().loadTexture('images/checkerboard.jpg')
  // floorTexture.wrapS = floorTexture.wrapT = RepeatWrapping
  // floorTexture.repeat.set(10, 10)
  var floorMaterial = new MeshBasicMaterial({
    color: 0xffffff,
    side: DoubleSide,
    wireframe: true
  })
  var floorGeometry = new PlaneGeometry(1000, 1000, 10, 10)
  var floor = new Mesh(floorGeometry, floorMaterial)
  floor.position.y = -0.5
  floor.rotation.x = Math.PI / 2
  scene.add(floor)
  // SKYBOX/FOG
  // let skyBoxGeometry = new CubeGeometry(10000, 10000, 10000)
  // let skyBoxMaterial = new MeshBasicMaterial({
  //   color: 0x9999ff,
  //   side: BackSide
  // })
  // let skyBox = new Mesh(skyBoxGeometry, skyBoxMaterial)
  // scene.add(skyBox);
  scene.fog = new FogExp2(0x9999ff, 0.00025)

  /// /////////
  // CUSTOM //
  /// /////////

  // create an array with six textures for a cool cube
  let materialArray = []
  materialArray.push(
    // new MeshBasicMaterial({ map: new TextureLoader().loadTexture('images/xpos.png') })
    new MeshBasicMaterial({ color: 0x222222 })
  )
  materialArray.push(
    // new MeshBasicMaterial({ map: new TextureLoader().loadTexture('images/xneg.png') })
    new MeshBasicMaterial({ color: 0x444444 })
  )
  materialArray.push(
    // new MeshBasicMaterial({ map: new TextureLoader().loadTexture('images/ypos.png') })
    new MeshBasicMaterial({ color: 0x666666 })
  )
  materialArray.push(
    // new MeshBasicMaterial({ map: new TextureLoader().loadTexture('images/yneg.png') })
    new MeshBasicMaterial({ color: 0x888888 })
  )
  materialArray.push(
    // new MeshBasicMaterial({ map: new TextureLoader().loadTexture('images/zpos.png') })
    new MeshBasicMaterial({ color: 0xaaaaaa })
  )
  materialArray.push(
    // new MeshBasicMaterial({ map: new TextureLoader().loadTexture('images/zneg.png') })
    new MeshBasicMaterial({ color: 0xcccccc })
  )
  let MovingCubeMat = new MeshFaceMaterial(materialArray)
  let MovingCubeGeom = new CubeGeometry(50, 50, 50, 1, 1, 1, materialArray)
  MovingCube = new Mesh(MovingCubeGeom, MovingCubeMat)
  MovingCube.position.set(0, 25.1, 0)
  scene.add(MovingCube)
}

var MovingCube

function animate () {
  window.requestAnimationFrame(animate)
  render()
  update()
}

function update () {
  let relativeCameraOffset = new Vector3(0, 50, 200)
  let cameraOffset = relativeCameraOffset.applyMatrix4(MovingCube.matrixWorld)

  camera.position.x = cameraOffset.x
  camera.position.y = cameraOffset.y
  camera.position.z = cameraOffset.z
  camera.lookAt(MovingCube.position)

  // camera.updateMatrix();
  // camera.updateProjectionMatrix();
}

function render () {
  renderer.render(scene, camera)
}
