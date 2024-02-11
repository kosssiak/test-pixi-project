import { Game } from './Game';
import * as PIXI from 'pixi.js';

export class App {

    private application: PIXI.Application;
    private game: Game;

    constructor() {
        this.application = new PIXI.Application();
        this.game = new Game(this.application);
        this.init();
    }

    protected init() {
        const canvas = this.application.view as HTMLCanvasElement;
        canvas.classList.add('game-canvas');
        document.body.appendChild(canvas);
    }
}