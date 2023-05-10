import Phaser from "phaser";
import Bird from "../assets/bird.png";

export default class HelloWorldScene extends Phaser.Scene {
	right: Phaser.Input.Keyboard.Key | undefined;
	left: Phaser.Input.Keyboard.Key | undefined;
	up: Phaser.Input.Keyboard.Key | undefined;
	down: Phaser.Input.Keyboard.Key | undefined;
	pajaro: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
	constructor() {
		super("helloworld");
	}
	preload() {
		this.load.image("pajaro", Bird);
	}

	create() {
		this.pajaro = this.physics.add.image(0, 0, "pajaro");
		this.pajaro.setCollideWorldBounds(true);
		this.right = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.left = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.up = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.down = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.S);
	}

	update(time: number, delta: number): void {
		this.makeMove();
	}

	makeMove() {
		if (this.right?.isDown) this.pajaro.x += 2;
		if (this.left?.isDown) this.pajaro.x -= 2;
		if (this.up?.isDown) this.pajaro.y -= 10;
		if (this.down?.isDown) this.pajaro.y += 2;
	}
}
