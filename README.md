# Gimme-That-Garbage
My first web game built in Phaser, to be incorporated in the Arcade section of "Comfort Cabinet".


Uses a combination of the [Vite](https://github.com/phaserjs/template-vite-ts) and [NextJS](https://github.com/phaserjs/template-nextjs) templates for create-phaser-game. Check the README's of both reppos for the basic project structure, commands, and essential files. 

## Concept
The player will drive a garbage truck in different environments, aiming to collect as much trash as possible before time runs out and return to the dump to deposit their stash.

## Game Loop Design

### Levels
In order to offer more variety to the game, we have different levels with their own unique routing and points of interest for where garbage will be.
This also allows for different categories for the highscores and the possibility of introducing more hazards. All levels will be available from the start so players can choose to play on certain maps if they prefer.

### Enemies
The main force set to stop you from doing your job are the Garbage Goblins. If they come in contact with the truck, they will take an amount of garbage from your truck, essentially decreasing your possible total score.
I was thinking of a separate health system for the bar, but I believe it doesn't make too much sense with the time limit constraint already part of the game.

### Time
In order to constrain the game into a low-commitment loop, but still rewarding for playing more, we instate a time limit per run of the game.
I want the player to not be able to familiarize a whole level within the alotted time loop, and eventually be able to master routing of maps to aim for an optimal high score.
The time loop also is part of another risk in the game: not depositing trash in time. Any garbage in the truck when the time runs out is not counted towards the total, so be sure
to not cut it too close (or be greedy for a high score).

## Integration Plans
- WIP

## Future Goals
- WIP
