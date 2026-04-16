import { Player } from '../entity/Player'
import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    player: Player
    dump: Phaser.GameObjects.Image;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cursors = this.input.keyboard!.createCursorKeys();

        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        this.player = new Player(this, 512, 384);
        this.dump = this.add.image(512, 192, 'dump')

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }

    update ()
    {
        //  Stop acceleration when no key is down
        this.player.setAcceleration(0);

        //  Decelerate by braking with space key
        if(this.cursors.space.isDown)
        {
            this.player.brake();
        }

        //  Cardinal Acceleration with Cursor Arrow Keys
        if(this.cursors.up.isDown) {
            this.player.moveUp();
        }

        if(this.cursors.down.isDown) {
            this.player.moveDown();
        }

        if(this.cursors.left.isDown) {
            this.player.moveLeft();
        }

        if(this.cursors.right.isDown) {
            this.player.moveRight();
        }
    }
}
