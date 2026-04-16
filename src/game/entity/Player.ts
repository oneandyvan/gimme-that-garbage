import { Scene } from 'phaser';
import * as Phaser from 'phaser';

export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, "truck");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);  
        this.setMaxVelocity(300);
        this.setDrag(40);
    }

    public moveUp() {
        this.setAccelerationY(-60);
    }

    public moveDown() {
        this.setAccelerationY(60);
    }

    public moveLeft() {
        this.setAccelerationX(-60);
        this.flipX = true;
    }

    public moveRight() {
        this.setAccelerationX(60);
        this.flipX = false;
    }

    public brake() {
        this.setDrag(150);
    }
}