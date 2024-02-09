// src/index.ts
import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view as HTMLCanvasElement);

//const sprite = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png');
//sprite.anchor.set(0.5);
//sprite.x = app.screen.width / 2;
//sprite.y = app.screen.height / 2;

//app.stage.addChild(sprite);
