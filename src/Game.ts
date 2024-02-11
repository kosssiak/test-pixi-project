import * as PIXI from 'pixi.js';

export class Game {

    protected app: PIXI.Application;

    constructor(app: PIXI.Application) {
        this.app = app;

        this.init();
    }

    protected init() {
        const texture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png');
        const sprite = PIXI.Sprite.from(texture);
        sprite.anchor.set(0.5);
        sprite.x = this.app.screen.width / 2;
        sprite.y = this.app.screen.height / 2;
        
        this.app.stage.addChild(sprite);
    }
}