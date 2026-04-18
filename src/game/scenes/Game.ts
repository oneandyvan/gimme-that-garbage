import { Player } from '../entity/Player'
import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    player: Player;
    dump: Phaser.GameObjects.Image;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    terrainTile: Phaser.GameObjects.Image;
    tileSize: number;
    tileRowCount: number;
    worldSize: number;

    constructor ()
    {
        super('Game');
        this.tileSize = 16;
        this.tileRowCount = 100;
        this.worldSize = this.tileSize * this.tileRowCount;
    }

    create ()
    {
        //  Instantiate cursor keyboard input
        this.cursors = this.input.keyboard!.createCursorKeys();

        //  Set camera and world bounds
        this.camera = this.cameras.main;
        this.cameras.main.setBounds(0, 0, this.worldSize, this.worldSize);
        this.physics.world.setBounds(0, 0, this.worldSize, this.worldSize);

        //  Populate with terrain tile (replace with tilemap implementation later)
        for (let i = 0; i < this.tileRowCount; i++) {
            for (let j = 0; j < this.tileRowCount; j++) {
                this.add.image(i * this.tileSize * 2, j * this.tileSize * 2, 'terrain').setOrigin(0, 0).setScale(2);
            }
        }

        //  Instantiate player and set camera to follow player
        this.player = new Player(this, 512, 384);
        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);

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
        if (this.cursors.space.isDown)
        {
            this.player.brake();
        }

        //  Cardinal Acceleration with Cursor Arrow Keys
        if (this.cursors.up.isDown && this.cursors.space.isUp) {
            this.player.moveUp();
        }

        if (this.cursors.down.isDown && this.cursors.space.isUp) {
            this.player.moveDown();
        }

        if (this.cursors.left.isDown && this.cursors.space.isUp) {
            this.player.moveLeft();
        }

        if (this.cursors.right.isDown && this.cursors.space.isUp) {
            this.player.moveRight();
        }
    }
}
