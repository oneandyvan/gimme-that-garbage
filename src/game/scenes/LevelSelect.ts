import { Scene, GameObjects } from 'phaser';

export class LevelSelect extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('LevelSelect');
    }

    create ()
    {
        this.background = this.add.image(512, 384, 'background');

        this.title = this.add.text(512, 50, 'Level Select', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
