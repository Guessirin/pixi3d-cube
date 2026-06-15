import * as PIXI from 'pixi.js'
import { CameraOrbitControl, Mesh3D, Light, LightingEnvironment } from 'pixi3d/pixi7';

// 1. Initialize your PixiJS / Pixi3D application
let app = new PIXI.Application({
  backgroundColor: 0xdddddd, resizeTo: window, antialias: true
})
document.body.appendChild(app.view as HTMLCanvasElement)

let mesh = app.stage.addChild(Mesh3D.createCube());

let light = new Light();
light.position.set(-1, 0, 3);
LightingEnvironment.main.lights.push(light);

let rotation = 0;
app.ticker.add(() => {
    mesh.rotationQuaternion.setEulerAngles(0, rotation++, 0);
});


let control = new CameraOrbitControl(app.view as HTMLCanvasElement);
