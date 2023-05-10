import { Game, AUTO, Types } from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";

const config: Types.Core.GameConfig = {
	type: AUTO,
	parent: "phaser-container",
	backgroundColor: "#282c34",
	width: 1080,
	height: 720,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 500 },
		},
	},
	scene: [HelloWorldScene],
};

export default new Game(config);
